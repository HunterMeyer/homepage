<template>
  <div
    class="rounded-lg bg-black px-3 py-1 text-center text-xs font-light text-white dark:bg-my-black-800/50"
  >
    {{ title }}
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
