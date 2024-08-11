<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item" v-for="item in items">
        <button
          class="navbar-link"
          :class="{ active: item.id === activeItem.id }"
          :key="item.id"
          @click.prevent="setActiveItem(item)"
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
  initActiveItem: {
    type: Object,
    required: false,
    default(rawProps) {
      return rawProps.items[0]
    }
  }
})

const activeItem = ref(props.initActiveItem)

const setActiveItem = (item) => {
  activeItem.value = item
  emit("itemSelect", item)
}
</script>
