<template>
  <li class="timeline-item">
    <h4 class="h4 timeline-item-title">
      <a :href="url" :title="title" target="_blank" class="h4 timeline-item-title">
        {{ title }}
      </a>
    </h4>
    <p class="timeline-text">
      {{ subtitle }}
    </p>
    <span>{{ dates }}</span>
  </li>
</template>

<script setup>
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
</script>
