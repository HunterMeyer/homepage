import { onMounted, onBeforeUnmount } from "vue"

const isTypingTarget = (el) =>
  el instanceof HTMLElement &&
  (el.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName))

/**
 * Number keys 1–9 jump to the matching item (1 = first item).
 * Ignored while typing in a field, with modifier keys held, or on key repeat.
 */
export const useNumberKeyNav = (items, onSelect) => {
  const onKeyDown = (event) => {
    if (event.defaultPrevented || event.repeat) return
    if (event.metaKey || event.ctrlKey || event.altKey) return
    if (isTypingTarget(event.target)) return
    if (!/^[1-9]$/.test(event.key)) return

    const item = items[Number(event.key) - 1]
    if (!item) return

    event.preventDefault()
    onSelect(item)
  }

  onMounted(() => window.addEventListener("keydown", onKeyDown))
  onBeforeUnmount(() => window.removeEventListener("keydown", onKeyDown))
}
