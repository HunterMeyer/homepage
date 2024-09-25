<template>
  <nav
    class="right-0 z-20 bg-black px-4 py-2 max-md:fixed max-md:bottom-0 max-md:z-20 max-md:w-full max-md:rounded-t-3xl max-md:backdrop-blur-md md:absolute md:top-0 md:rounded-bl-3xl md:rounded-tr-3xl md:bg-black md:px-8 dark:bg-my-black-900/70 md:dark:bg-my-black-800/50"
  >
    <div class="flex flex-row md:justify-start md:gap-6">
      <a
        v-for="(item, index) in items"
        @click.prevent="handleClick(item)"
        :key="index"
        :href="`#${item.id}`"
        :class="{ active: item.id === activeItemId }"
        class="md:text-md flex-1 basis-0 rounded-md px-4 py-2 text-center text-sm text-white hover:text-gray-400 dark:text-gray-300 dark:hover:text-white [&.active]:text-yellow-500 [&.active]:hover:text-yellow-500"
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
