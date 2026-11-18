<template>
  <header class="flex flex-col gap-3">
    <span class="pixel-label text-neon-magenta">Stage {{ stageLabel }} · {{ kicker }}</span>
    <h2
      class="neon-text flex items-center gap-3 font-display text-2xl font-bold uppercase tracking-wide text-white md:text-3xl"
    >
      <span
        aria-hidden="true"
        class="h-7 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-neon-cyan to-neon-magenta shadow-glow-sm"
      ></span>
      {{ title }}
    </h2>
  </header>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  kicker: {
    type: String,
    required: true,
  },
  stage: {
    type: Number,
    required: true,
  },
})

const stageLabel = computed(() => String(props.stage).padStart(2, "0"))
</script>
