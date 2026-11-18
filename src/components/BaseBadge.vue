<template>
  <span :class="['chip', variantClass]">
    <slot>{{ title }}</slot>
  </span>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "cyan",
    validator: (value) => ["cyan", "magenta", "gold", "muted"].includes(value),
  },
})

const variantClass = computed(
  () =>
    ({
      cyan: "",
      magenta: "chip-magenta",
      gold: "border-neon-gold/40 bg-neon-gold/10 text-neon-gold",
      muted: "border-white/10 bg-white/5 font-medium text-arcade-200",
    })[props.variant],
)
</script>
