import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from "vue"
import { setPageTitle } from "@/utils/page-title"

// A section becomes active once its top passes this fraction of the viewport height
const ACTIVATION_LINE = 0.35
// Backstop for the pause after a jump: resume once no scroll event has arrived
// for this long (covers jumps that never scroll, or get stopped by a scrollbar drag)
const MAX_PAUSE_MS = 3000

const idFromHash = () => window.location.hash.substring(1) // remove #-sign

/**
 * Tracks which section is in view on a single scrolling page, keeping the URL
 * hash and page title in sync. Each item's `id` must match a DOM element id.
 *
 * - Nav links are plain `#id` anchors: the browser scrolls to them (smoothly,
 *   via CSS `scroll-behavior`) and adds a history entry, so back/forward work.
 * - While a jump is in progress the spy is paused, so the nav doesn't flicker
 *   through every section in between. It resumes when the target reaches its
 *   resting spot, when the user takes over (wheel/touch), on scrollend, or
 *   after a quiet backstop period. None of that depends on frame timing.
 * - Plain scrolling updates the hash with replaceState (no history spam).
 */
export const useScrollSpy = (items) => {
  const findItem = (id) => items.find((item) => item.id === id)

  const activeItem = ref(findItem(idFromHash()) || items[0])
  const activeItemId = computed(() => activeItem.value.id)

  let paused = false
  let jumpTarget = null
  let jumpStarted = false
  let maxPauseTimer
  let frameRequested = false

  const atBottom = () =>
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2

  const sectionInView = () => {
    if (atBottom()) return items[items.length - 1]

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

  // Has the jump target arrived where the browser scrolls it to (its
  // scroll-margin-top), or as close as the page allows?
  const jumpArrived = () => {
    const el = jumpTarget && document.getElementById(jumpTarget.id)
    if (!el) return true
    const restingTop = parseFloat(window.getComputedStyle(el).scrollMarginTop) || 0
    const top = el.getBoundingClientRect().top
    return Math.abs(top - restingTop) < 2 || window.scrollY <= 0 || atBottom()
  }

  const resume = () => {
    if (!paused) return
    paused = false
    jumpTarget = null
    clearTimeout(maxPauseTimer)
    updateFromScroll()
  }

  const restartBackstop = () => {
    clearTimeout(maxPauseTimer)
    maxPauseTimer = setTimeout(resume, MAX_PAUSE_MS)
  }

  const pauseForJump = (item) => {
    paused = true
    jumpTarget = item
    jumpStarted = false
    restartBackstop()
  }

  const onScroll = () => {
    if (paused) {
      jumpStarted = true
      if (jumpArrived()) return resume()
      restartBackstop() // still moving: keep waiting
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
    pauseForJump(item)
  }

  // Jump to a section (nav clicks and keyboard shortcuts). Scrolls explicitly
  // instead of relying on the browser's fragment navigation: some browsers
  // (Safari, Firefox) ignore a new hash while a smooth scroll is still running,
  // but every browser retargets on a fresh scrollIntoView().
  const goTo = (item) => {
    const el = document.getElementById(item.id)
    if (!el) return

    select(item)
    if (idFromHash() !== item.id) {
      // New history entry so back/forward work (pushState fires no hashchange)
      window.history.pushState(null, "", `#${item.id}`)
    }
    // Default behavior follows CSS scroll-behavior (smooth unless reduced motion)
    el.scrollIntoView({ block: "start" })
  }

  const onScrollEnd = () => {
    if (paused && jumpStarted) resume()
  }

  // The user grabbed the scroll mid-jump: hand control back to the spy
  const onUserScrollIntent = () => {
    if (paused) resume()
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
    window.addEventListener("wheel", onUserScrollIntent, { passive: true })
    window.addEventListener("touchstart", onUserScrollIntent, { passive: true })
    window.addEventListener("hashchange", onHashChange)

    // The sections didn't exist when the browser first tried to jump to the hash
    const initial = findItem(idFromHash())
    if (initial) {
      await nextTick()
      pauseForJump(initial)
      document.getElementById(initial.id)?.scrollIntoView({ behavior: "instant" })
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll)
    window.removeEventListener("scrollend", onScrollEnd)
    window.removeEventListener("wheel", onUserScrollIntent)
    window.removeEventListener("touchstart", onUserScrollIntent)
    window.removeEventListener("hashchange", onHashChange)
    clearTimeout(maxPauseTimer)
  })

  return { activeItem, activeItemId, select, goTo }
}
