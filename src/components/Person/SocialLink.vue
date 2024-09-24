<template>
  <a
    :href="link.url"
    :title="link.title"
    target="_blank"
    class="flex rounded-sm text-xl leading-5 text-my-black-300 transition-colors ease-in hover:text-black dark:text-gray-300 dark:hover:text-white"
  >
    <i :class="link.iconName" />
  </a>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },
})
</script>
