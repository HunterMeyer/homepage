<template>
  <li class="skills-item">
    <div class="title-wrapper">
      <h5 class="h5">{{ title }}</h5>
      <data :value="level">{{ levelPercent }}</data>
    </div>

    <div class="skill-progress-bg">
      <div class="skill-progress-fill" :style="{ width: levelPercent }"></div>
    </div>
  </li>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
})

const levelPercent = computed(() => {
  return `${props.level}%`
})
</script>
