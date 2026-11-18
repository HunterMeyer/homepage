<template>
  <nav
    class="z-20 w-full py-3 max-md:fixed max-md:bottom-0 max-md:right-1/2 max-md:z-20 max-md:w-[calc(100%-5rem)] max-md:translate-x-1/2 max-md:rounded-t-3xl max-md:bg-black max-md:shadow-lg max-md:backdrop-blur-md max-sm:w-[calc(100%)] md:absolute md:right-0 md:top-0 md:rounded-t-3xl md:px-8 md:py-2 md:pt-6 max-md:dark:bg-my-black-800/30"
  >
    <div class="flex flex-row md:gap-6 max-md:justify-evenly">
      <a
        v-for="(item, index) in items"
        @click.prevent="handleClick(item)"
        :key="index"
        :href="`#${item.id}`"
        :class="{ active: item.id === activeItemId }"
        class="md:w-1/4 rounded-2xl border border-gray-200/20 px-4 py-2 text-center text-sm text-white shadow-lg hover:text-gray-400 md:text-base dark:text-gray-300 dark:hover:text-white [&.active]:border-yellow-200/10 [&.active]:bg-yellow-200/10 [&.active]:text-yellow-500 [&.active]:hover:text-yellow-500"
      >
        {{ item.title }}
      </a>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  activeItemId: {
    type: [String, Number],
    required: true,
  },
})

const emit = defineEmits(["itemSelect"])

const handleClick = (item) => {
  emit("itemSelect", item)
}
</script>
