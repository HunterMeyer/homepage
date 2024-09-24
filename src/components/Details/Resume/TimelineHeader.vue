<template>
  <header class="z-10 flex flex-row items-center gap-5 text-2xl">
    <div
      class="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-yellow-500 shadow-lg dark:bg-yellow-200/10 dark:text-yellow-300"
    >
      <i :class="iconName" />
    </div>
    <h3 class="font-bold">{{ title }}</h3>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    require: true,
  },
  iconName: {
    type: String,
    required: true,
  },
})
</script>
