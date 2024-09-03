<template>
  <a
    :href="link.url"
    :title="link.title"
    target="_blank"
    class="
      flex
      transition-colors ease-in
      rounded-lg
      p-1.5
      text-my-black-300
      dark:text-my-black-200
      hover:text-black
      dark:hover:text-white
      neu-shadow-flat-2xs
    "
  >
    <v-icon :name="link.iconName" scale="0.8" :label="link.title"/>
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
