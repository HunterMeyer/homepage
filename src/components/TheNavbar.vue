<template>
  <nav
    class="z-20 w-full py-3 max-md:fixed max-md:bottom-0 max-md:right-1/2 max-md:z-20 max-md:mb-2 max-md:w-[calc(100%-5rem)] max-md:translate-x-1/2 max-md:rounded-3xl max-md:bg-black max-md:backdrop-blur-md max-sm:w-[calc(100%-.5rem)] md:absolute md:right-0 md:top-0 md:rounded-t-3xl md:px-8 md:py-2 md:pt-5 max-md:dark:bg-my-black-800/30"
  >
    <div class="flex flex-row justify-evenly">
      <a
        v-for="(item, index) in items"
        @click.prevent="handleClick(item)"
        :key="index"
        :href="`#${item.id}`"
        :class="{ active: item.id === activeItemId }"
        class="rounded-2xl border border-gray-200/20 px-4 py-2 text-center text-sm text-white shadow-lg hover:text-gray-400 md:text-base dark:text-gray-300 dark:hover:text-white [&.active]:border-yellow-200/10 [&.active]:bg-yellow-200/10 [&.active]:text-yellow-500 [&.active]:hover:text-yellow-500"
      >
        {{ item.title }}
      </a>
    </div>
  </nav>
</template>

<script setup>
import { computed, ref, onMounted } from "vue"
import { setPageTitle } from "@/utils/page-title"

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  initActiveItemId: {
    type: [String, Number, null],
    required: false,
    default: null,
  },
})

const emit = defineEmits(["itemSelect"])

const activeItem = ref()

const activeItemId = computed(() => {
  return activeItem.value?.id
})

onMounted(() => {
  setInitialActiveItem()
})

const setInitialActiveItem = () => {
  const itemIdFromUrlHash = window.location.hash.substring(1) // remove #-sign
  const itemIdFromProps = props.initActiveItemId
  const itemIdFromFirstItem = props.items[0].id

  const activeItemId = itemIdFromUrlHash || itemIdFromProps || itemIdFromFirstItem
  const activeItem = props.items.find((item) => item.id === activeItemId)

  setActiveItem(activeItem)
}

const setActiveItem = (item) => {
  activeItem.value = item
  setPageTitle(item.title)
  emit("itemSelect", item)
}

const handleClick = (item) => {
  // Only set the hash when the user clicks a link
  window.history.replaceState(undefined, undefined, `#${item.id}`)
  setActiveItem(item)
}
</script>
