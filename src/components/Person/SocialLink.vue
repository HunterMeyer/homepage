<template>
  <a
    :href="link.url"
    :title="link.title"
    target="_blank"
    class="flex rounded-sm text-2xl leading-5 text-my-black-300 transition-colors duration-150 ease-in hover:text-black dark:text-white dark:hover:text-yellow-500"
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
