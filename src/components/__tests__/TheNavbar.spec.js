import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import TheNavbar from "../TheNavbar.vue"

const items = [
  { id: "about", title: "About", icon: "ri-user-3-line" },
  { id: "resume", title: "Resume", icon: "ri-sword-line" },
]

const mountNavbar = () => mount(TheNavbar, { props: { items, activeItemId: "about" } })

const click = (link, options = {}) => {
  const event = new MouseEvent("click", { bubbles: true, cancelable: true, ...options })
  link.element.dispatchEvent(event)
  return event
}

describe("TheNavbar", () => {
  it("emits the clicked item and cancels the browser's own jump", () => {
    const wrapper = mountNavbar()
    const event = click(wrapper.findAll("a")[1])
    expect(wrapper.emitted("itemSelect")).toEqual([[items[1]]])
    expect(event.defaultPrevented).toBe(true)
  })

  it("leaves modified clicks (open in new tab) to the browser", () => {
    const wrapper = mountNavbar()
    const event = click(wrapper.findAll("a")[1], { metaKey: true })
    expect(wrapper.emitted("itemSelect")).toBeUndefined()
    expect(event.defaultPrevented).toBe(false)
  })

  it("marks the active item and advertises its shortcut", () => {
    const wrapper = mountNavbar()
    const [about, resume] = wrapper.findAll("a")
    expect(about.attributes("aria-current")).toBe("location")
    expect(resume.attributes("aria-current")).toBeUndefined()
    expect(resume.attributes("aria-keyshortcuts")).toBe("2")
  })
})
