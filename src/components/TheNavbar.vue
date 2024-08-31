<template>
  <nav class="
    max-md:fixed
    md:absolute
    max-md:bottom-0
    md:top-0
    right-0
    max-md:w-full
    bg-black
    md:bg-black
    dark:bg-my-black-500/70
    md:dark:bg-my-black-500
    max-md:backdrop-blur-md
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
        :class="{ active: item.id === activeItemId }"
        class="
          text-sm
          md:text-md
          px-4
          py-2
          rounded-md
          transition-colors ease-in
          [&.active]:text-yellow-500 [&.active]:hover:text-yellow-500
          text-white hover:text-my-black-100
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
