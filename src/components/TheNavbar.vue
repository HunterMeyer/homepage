<template>
  <nav class="
    max-md:fixed
    md:absolute
    max-md:bottom-0
    md:top-6
    right-0
    max-md:w-full
    bg-stone-200
    dark:bg-my-black-700
    md:bg-transparent
    max-md:rounded-t-3xl
    md:rounded-tr-3xl
    md:rounded-bl-3xl
    px-4
    md:px-8
    py-2
    max-md:z-20
  "
  >
    <div class="flex flex-row gap-6 justify-center md:justify-start">
      <a
        v-for="(item, index) in items"
        @click.prevent="handleClick(item)"
        :key="index"
        :href="`#${item.id}`"
        :class="{ 'active neu-shadow-inset-2xs': item.id === activeItemId }"
        class="
          text-sm
          md:text-md
          px-4
          py-2
          rounded-md
          transition-colors ease-in
          [&.active]:text-yellow-600 [&.active]:hover:text-yellow-600
          text-stone-800 hover:text-stone-900
          dark:text-my-black-200
          dark:hover:text-white
          neu-shadow-convex-2xs
        "
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
  const activeItem = props.items.find(item => item.id === activeItemId)

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
