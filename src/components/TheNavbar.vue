<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="navbar-item"
      >
        <a
          :href="`#${item.id}`"
          @click.prevent="handleClick(item)"
          :class="{ active: item.id === activeItemId }"
          class="navbar-link"
        >
          {{item.title}}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed, ref, onMounted, } from "vue"
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
