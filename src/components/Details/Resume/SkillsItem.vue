<template>
  <section class="flex flex-col gap-2">
    <header class="flex flex-row items-baseline justify-between gap-3">
      <h4 class="font-semibold text-white">{{ title }}</h4>
      <data
        :value="level"
        class="pixel-label shrink-0 text-neon-gold"
      >
        {{ level }}/100
      </data>
    </header>

    <div
      class="h-3.5 w-full rounded border border-white/10 bg-arcade-950/70 p-[2px]"
      role="meter"
      :aria-label="title"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="level"
    >
      <div
        class="hp-bar h-full rounded-sm"
        :style="{ width: `${level}%` }"
      ></div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  level: {
    type: [String, Number],
    required: true,
  },
})
</script>
