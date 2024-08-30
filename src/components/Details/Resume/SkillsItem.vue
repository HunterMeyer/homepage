<template>
  <section class="flex flex-col gap-2">
    <header class="flex flex-row gap-1.5 items-baseline">
      <h5 class="text-md font-medium">{{ title }}</h5>
      <data :value="level" class="text-md font-light text-my-black-300 dark:text-my-black-200">{{ levelPercent }}</data>
    </header>

    <section>
      <div class="w-full h-2 rounded-md bg-gray-100 dark:bg-my-black-800 shadow-inner">
        <div class="h-full rounded-md bg-gradient-to-r from-amber-300 to-amber-400" :style="{ width: levelPercent }"></div>
      </div>
    </section>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  level: {
    type: [String, Number],
    required: true,
  },
})

const levelPercent = `${props.level}%`
</script>
