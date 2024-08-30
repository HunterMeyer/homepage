<template>
  <a
    :href="link.url"
    :title="link.title"
    target="_blank"
    class="
      flex
      transition-colors ease-in
      text-my-black-300
      dark:text-my-black-200
      hover:text-black
      dark:hover:text-white
      rounded-sm
    "
  >
    <v-icon :name="link.iconName" scale="1.1" :label="link.title"/>
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
