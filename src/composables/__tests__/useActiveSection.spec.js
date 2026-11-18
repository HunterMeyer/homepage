import { describe, it, expect, beforeEach, vi } from "vitest"
import { defineComponent, h, nextTick } from "vue"
import { mount } from "@vue/test-utils"
import { useActiveSection } from "../useActiveSection.js"

const items = [
  { id: "about", title: "About" },
  { id: "resume", title: "Resume" },
]

const mountWith = () => {
  let api
  const wrapper = mount(
    defineComponent({
      setup() {
        api = useActiveSection(items)
        return () => h("div", api.activeItemId.value)
      },
    }),
  )
  return { wrapper, api }
}

describe("useActiveSection", () => {
  beforeEach(() => {
    window.history.replaceState(undefined, "", "/")
    window.scrollTo = vi.fn()
  })

  it("defaults to the first item without a hash", () => {
    const { api } = mountWith()
    expect(api.activeItemId.value).toBe("about")
    expect(document.title).toBe("Hunter Meyer | About")
  })

  it("reads the initial section from the hash", () => {
    window.history.replaceState(undefined, "", "/#resume")
    const { api } = mountWith()
    expect(api.activeItemId.value).toBe("resume")
  })

  it("falls back to the first item for an unknown hash", () => {
    window.history.replaceState(undefined, "", "/#nope")
    const { api } = mountWith()
    expect(api.activeItemId.value).toBe("about")
  })

  it("pushes a history entry, updates the title and scrolls to top on select", () => {
    const { api } = mountWith()
    const before = window.history.length
    api.select(items[1])
    expect(window.location.hash).toBe("#resume")
    expect(window.history.length).toBe(before + 1)
    expect(document.title).toBe("Hunter Meyer | Resume")
    expect(window.scrollTo).toHaveBeenCalled()
  })

  it("follows hash changes (back/forward, edited URL)", async () => {
    const { wrapper, api } = mountWith()
    window.history.replaceState(undefined, "", "/#resume")
    window.dispatchEvent(new HashChangeEvent("hashchange"))
    await nextTick()
    expect(api.activeItemId.value).toBe("resume")
    expect(wrapper.text()).toBe("resume")
  })
})
