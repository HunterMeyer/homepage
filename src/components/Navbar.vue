<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li v-for="item in items" class="navbar-item">
        <button
          class="navbar-link"
          :class="{ active: item.id === activeItemId }"
          :key="item.id"
          @click.prevent="setActiveItem(item.id)"
        >
          {{item.title}}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue"
const emit = defineEmits(["itemSelect"])

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  initActiveItemId: {
    type: [String, Number],
    required: false,
    default(rawProps) {
      return rawProps.items[0].id
    },
  },
})

const activeItemId = ref(props.initActiveItemId)

const setActiveItem = (itemId) => {
  activeItemId.value = itemId
  emit("itemSelect", itemId)
}
</script>
