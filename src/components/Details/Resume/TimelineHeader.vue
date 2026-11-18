<template>
  <header class="flex flex-row items-center gap-4">
    <div
      class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neon-cyan/40 bg-neon-cyan/10 text-xl text-neon-cyan shadow-glow-sm"
    >
      <i
        :class="iconName"
        aria-hidden="true"
      />
    </div>
    <h3 class="font-display text-lg font-bold uppercase tracking-wider text-white">
      {{ title }}
    </h3>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
})
</script>
