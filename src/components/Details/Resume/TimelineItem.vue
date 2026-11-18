<template>
  <li class="relative pb-6 pl-8 last:pb-0">
    <!-- Diamond node on the timeline rail -->
    <span
      aria-hidden="true"
      :class="
        isCurrent
          ? 'border-neon-magenta bg-neon-magenta shadow-glow-magenta'
          : 'border-neon-cyan/70 bg-arcade-900'
      "
      class="absolute -left-[6.5px] top-2 h-3 w-3 rotate-45 border-2"
    ></span>

    <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
      <h4 class="text-lg font-bold">
        <a
          :href="url"
          :title="title"
          target="_blank"
          class="rounded text-white transition hover:text-neon-cyan"
        >
          {{ title }}
        </a>
      </h4>
      <BaseBadge
        :title="dates"
        :variant="isCurrent ? 'magenta' : 'muted'"
      />
    </div>
    <p class="mt-1 text-arcade-300">{{ subtitle }}</p>
  </li>
</template>

<script setup>
import { computed } from "vue"
import BaseBadge from "@/components/BaseBadge.vue"

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  dates: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})

const isCurrent = computed(() => /present/i.test(props.dates))
</script>
