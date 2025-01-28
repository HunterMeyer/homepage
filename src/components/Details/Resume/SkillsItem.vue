<template>
  <section class="flex flex-col gap-2">
    <header class="flex flex-row items-baseline gap-1.5">
      <h4 class="text-base font-medium">{{ title }}</h4>
      <data
        :value="level"
        class="text-base font-light text-my-black-300 dark:text-gray-300"
      >
        {{ levelPercent }}
      </data>
    </header>

    <section>
      <div class="h-2 w-full rounded-md bg-gray-100 shadow-inner dark:bg-my-black-800/50">
        <div
          class="h-full rounded-md bg-gradient-to-r from-amber-300 to-amber-400"
          :style="{ width: levelPercent }"
        ></div>
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
