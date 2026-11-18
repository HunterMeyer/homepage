import { ref, computed, onMounted, onBeforeUnmount } from "vue"
import { setPageTitle } from "@/utils/page-title"

const idFromHash = () => window.location.hash.substring(1) // remove #-sign

/**
 * Single source of truth for the active section, kept in sync with the URL hash.
 * - Reads the hash on setup, so the right section renders on first paint.
 * - Clicking pushes a history entry, so back/forward move between sections.
 * - Listens for hash changes (back/forward, edited URL, in-page links).
 */
export const useActiveSection = (items) => {
  const findItem = (id) => items.find((item) => item.id === id) || items[0]

  const activeItem = ref(findItem(idFromHash()))
  const activeItemId = computed(() => activeItem.value.id)

  const apply = (item) => {
    activeItem.value = item
    setPageTitle(item.title)
  }

  const select = (item) => {
    if (item.id !== activeItemId.value) {
      window.history.pushState(undefined, "", `#${item.id}`)
      apply(item)
    }

    // Start the newly selected section at the top (matters most on mobile,
    // where the nav is fixed to the bottom and the page may be scrolled far down)
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  const syncFromUrl = () => {
    const item = findItem(idFromHash())
    if (item.id !== activeItemId.value) apply(item)
  }

  apply(activeItem.value)

  onMounted(() => {
    window.addEventListener("popstate", syncFromUrl)
    window.addEventListener("hashchange", syncFromUrl)
  })

  onBeforeUnmount(() => {
    window.removeEventListener("popstate", syncFromUrl)
    window.removeEventListener("hashchange", syncFromUrl)
  })

  return { activeItem, activeItemId, select }
}
