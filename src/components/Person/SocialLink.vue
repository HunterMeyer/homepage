<template>
  <a
    :href="link.url"
    :title="link.title"
    target="_blank"
    class="flex rounded-sm text-my-black-300 transition-colors ease-in hover:text-black dark:text-gray-300 dark:hover:text-white"
  >
    <v-icon
      :name="link.iconName"
      scale="1.1"
      :label="link.title"
    />
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
