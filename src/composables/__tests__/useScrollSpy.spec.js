import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { defineComponent, h, nextTick } from "vue"
import { mount } from "@vue/test-utils"
import { useScrollSpy } from "../useScrollSpy.js"

const items = [
  { id: "about", title: "About" },
  { id: "resume", title: "Resume" },
  { id: "projects", title: "Projects" },
]

// jsdom has no layout, so each section reports a fake top relative to scrollY
const sectionOffsets = { about: 0, resume: 1000, projects: 2000 }

const setScroll = (y) => {
  window.scrollY = y
  window.dispatchEvent(new Event("scroll"))
}

const mountSpy = () => {
  let api
  const wrapper = mount(
    defineComponent({
      setup() {
        api = useScrollSpy(items)
        return () =>
          h(
            "div",
            items.map((item) => h("section", { id: item.id })),
          )
      },
    }),
    { attachTo: document.body },
  )
  for (const item of items) {
    const el = document.getElementById(item.id)
    el.getBoundingClientRect = () => ({ top: sectionOffsets[item.id] - window.scrollY })
    el.scrollIntoView = vi.fn()
  }
  return { wrapper, api }
}

describe("useScrollSpy", () => {
  let wrapper

  beforeEach(() => {
    vi.useFakeTimers()
    window.history.replaceState(undefined, "", "/")
    window.scrollY = 0
    window.innerHeight = 800
    Object.defineProperty(document.documentElement, "scrollHeight", {
      configurable: true,
      value: 10000,
    })
    window.requestAnimationFrame = (cb) => cb()
  })

  afterEach(() => {
    wrapper?.unmount()
    vi.useRealTimers()
  })

  it("starts on the first section without a hash", () => {
    let api
    ;({ wrapper, api } = mountSpy())
    expect(api.activeItemId.value).toBe("about")
    expect(document.title).toBe("Hunter Meyer | About")
  })

  it("starts on the section in the hash and scrolls to it", async () => {
    window.history.replaceState(undefined, "", "/#projects")
    let api
    ;({ wrapper, api } = mountSpy())
    await nextTick()
    await nextTick()
    expect(api.activeItemId.value).toBe("projects")
    expect(document.getElementById("projects").scrollIntoView).toHaveBeenCalled()
  })

  it("activates the section crossing the activation line and replaces the hash", async () => {
    let api
    ;({ wrapper, api } = mountSpy())
    const before = window.history.length

    setScroll(800) // resume top at 200px, above the 35% line (280px)
    await nextTick()
    expect(api.activeItemId.value).toBe("resume")
    expect(window.location.hash).toBe("#resume")
    expect(document.title).toBe("Hunter Meyer | Resume")
    expect(window.history.length).toBe(before)
  })

  it("activates the last section at the bottom of the page", () => {
    let api
    ;({ wrapper, api } = mountSpy())
    setScroll(10000 - 800)
    expect(api.activeItemId.value).toBe("projects")
  })

  it("pauses the spy while a nav jump is scrolling", () => {
    let api
    ;({ wrapper, api } = mountSpy())
    api.select(items[2])

    setScroll(900) // passing through resume on the way down
    expect(api.activeItemId.value).toBe("projects")

    setScroll(1900)
    vi.advanceTimersByTime(200) // scrolling went idle
    expect(api.activeItemId.value).toBe("projects")
  })

  it("stays paused if the jump's scroll starts late", () => {
    let api
    ;({ wrapper, api } = mountSpy())
    api.select(items[2])

    vi.advanceTimersByTime(500) // no scroll yet: must not snap back to "about"
    expect(api.activeItemId.value).toBe("projects")

    setScroll(1900)
    window.dispatchEvent(new Event("scrollend"))
    expect(api.activeItemId.value).toBe("projects")
    expect(window.location.hash).not.toBe("#about")
  })

  it("resumes after the cap when the jump needs no scrolling", () => {
    let api
    ;({ wrapper, api } = mountSpy())
    api.select(items[1]) // resume isn't in view at scrollY 0
    vi.advanceTimersByTime(1000)
    expect(api.activeItemId.value).toBe("about")
  })

  it("follows hash changes from back/forward", () => {
    let api
    ;({ wrapper, api } = mountSpy())
    window.history.replaceState(undefined, "", "/#resume")
    window.dispatchEvent(new HashChangeEvent("hashchange"))
    expect(api.activeItemId.value).toBe("resume")
  })
})
