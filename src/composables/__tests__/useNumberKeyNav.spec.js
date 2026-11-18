import { describe, it, expect, vi, afterEach } from "vitest"
import { defineComponent, h } from "vue"
import { mount } from "@vue/test-utils"
import { useNumberKeyNav } from "../useNumberKeyNav.js"

const items = [{ id: "about" }, { id: "resume" }, { id: "projects" }]

const mountNav = () => {
  const onSelect = vi.fn()
  const wrapper = mount(
    defineComponent({
      setup() {
        useNumberKeyNav(items, onSelect)
        return () => h("input")
      },
    }),
    { attachTo: document.body },
  )
  return { wrapper, onSelect }
}

const press = (key, options = {}, target = window) => {
  const event = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true, ...options })
  target.dispatchEvent(event)
  return event
}

describe("useNumberKeyNav", () => {
  let wrapper
  afterEach(() => wrapper?.unmount())

  it("selects the item matching the number pressed", () => {
    let onSelect
    ;({ wrapper, onSelect } = mountNav())
    const event = press("2")
    expect(onSelect).toHaveBeenCalledWith(items[1])
    expect(event.defaultPrevented).toBe(true)
  })

  it("ignores numbers with no matching item, and non-number keys", () => {
    let onSelect
    ;({ wrapper, onSelect } = mountNav())
    press("4")
    press("0")
    press("a")
    expect(onSelect).not.toHaveBeenCalled()
  })

  it("ignores modifier combos and key repeat", () => {
    let onSelect
    ;({ wrapper, onSelect } = mountNav())
    press("1", { metaKey: true })
    press("1", { ctrlKey: true })
    press("1", { altKey: true })
    press("1", { repeat: true })
    expect(onSelect).not.toHaveBeenCalled()
  })

  it("ignores keys typed into a field", () => {
    let onSelect
    ;({ wrapper, onSelect } = mountNav())
    press("1", {}, wrapper.find("input").element)
    expect(onSelect).not.toHaveBeenCalled()
  })

  it("stops listening when unmounted", () => {
    let onSelect
    ;({ wrapper, onSelect } = mountNav())
    wrapper.unmount()
    wrapper = null
    press("1")
    expect(onSelect).not.toHaveBeenCalled()
  })
})
