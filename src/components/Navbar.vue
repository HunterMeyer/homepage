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
          @click.prevent="handleClick(item.id)"
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
import { ref, onMounted } from "vue"

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

const activeItemId = ref()
const emit = defineEmits(["itemSelect"])

onMounted(() => {
  setInitialActiveItem()
})

const setInitialActiveItem = () => {
  const itemIdFromUrlHash = window.location.hash.substring(1) // remove #-sign
  const itemIdFromProps = props.initActiveItemId
  const firstItemId = props.items[0].id

  setActiveItem(itemIdFromUrlHash || itemIdFromProps || firstItemId)
}

const setActiveItem = (itemId) => {
  activeItemId.value = itemId
  emit("itemSelect", itemId)
}

const handleClick = (itemId) => {
  // Only set the hash when the user clicks a link
  window.history.replaceState(undefined, undefined, `#${itemId}`)
  setActiveItem(itemId)
}
</script>
