import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from "vue"
import { setPageTitle } from "@/utils/page-title"

// A section becomes active once its top passes this fraction of the viewport height
const ACTIVATION_LINE = 0.35
// How long scrolling must be idle before the spy takes over again after a jump
const SCROLL_IDLE_MS = 150
// Upper bound on that pause, in case the jump never scrolls
const MAX_PAUSE_MS = 1000

const idFromHash = () => window.location.hash.substring(1) // remove #-sign

/**
 * Tracks which section is in view on a single scrolling page, keeping the URL
 * hash and page title in sync. Each item's `id` must match a DOM element id.
 *
 * - Nav links are plain `#id` anchors: the browser scrolls to them (smoothly,
 *   via CSS `scroll-behavior`) and adds a history entry, so back/forward work.
 * - While a jump is in progress the spy is paused, so the nav doesn't flicker
 *   through every section in between.
 * - Plain scrolling updates the hash with replaceState (no history spam).
 */
export const useScrollSpy = (items) => {
  const findItem = (id) => items.find((item) => item.id === id)

  const activeItem = ref(findItem(idFromHash()) || items[0])
  const activeItemId = computed(() => activeItem.value.id)

  let paused = false
  let jumpStarted = false
  let idleTimer
  let maxPauseTimer
  let frameRequested = false

  const sectionInView = () => {
    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
    if (atBottom) return items[items.length - 1]

    const line = window.innerHeight * ACTIVATION_LINE
    let current = items[0]
    for (const item of items) {
      const el = document.getElementById(item.id)
      if (el && el.getBoundingClientRect().top <= line) current = item
    }
    return current
  }

  const updateFromScroll = () => {
    frameRequested = false
    if (paused) return

    const item = sectionInView()
    if (item.id !== activeItemId.value) {
      activeItem.value = item
      window.history.replaceState(window.history.state, "", `#${item.id}`)
    }
  }

  const resume = () => {
    if (!paused) return
    paused = false
    clearTimeout(idleTimer)
    clearTimeout(maxPauseTimer)
    updateFromScroll()
  }

  // Pause until the jump's scroll has started and then stopped. The cap covers
  // jumps that need no scrolling at all (target already in place).
  const pauseUntilScrollIdle = () => {
    paused = true
    jumpStarted = false
    clearTimeout(idleTimer)
    clearTimeout(maxPauseTimer)
    maxPauseTimer = setTimeout(resume, MAX_PAUSE_MS)
  }

  const onScroll = () => {
    if (paused) {
      // Jump still moving: wait for it to go idle (scrollend usually beats this)
      jumpStarted = true
      clearTimeout(idleTimer)
      idleTimer = setTimeout(resume, SCROLL_IDLE_MS)
      return
    }
    if (!frameRequested) {
      frameRequested = true
      window.requestAnimationFrame(updateFromScroll)
    }
  }

  // Called by nav links on click. The anchor's default behavior does the scrolling.
  const select = (item) => {
    activeItem.value = item
    pauseUntilScrollIdle()
  }

  const onScrollEnd = () => {
    if (paused && jumpStarted) resume()
  }

  // Back/forward or an edited URL: the browser handles the scroll position
  const onHashChange = () => {
    const item = findItem(idFromHash())
    if (item) select(item)
  }

  watch(activeItem, (item) => setPageTitle(item.title), { immediate: true })

  onMounted(async () => {
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("scrollend", onScrollEnd)
    window.addEventListener("hashchange", onHashChange)

    // The sections didn't exist when the browser first tried to jump to the hash
    const initial = findItem(idFromHash())
    if (initial) {
      await nextTick()
      pauseUntilScrollIdle()
      document.getElementById(initial.id)?.scrollIntoView({ behavior: "instant" })
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll)
    window.removeEventListener("scrollend", onScrollEnd)
    window.removeEventListener("hashchange", onHashChange)
    clearTimeout(idleTimer)
    clearTimeout(maxPauseTimer)
  })

  return { activeItem, activeItemId, select }
}
