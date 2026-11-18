<template>
  <a
    :href="link.url"
    :title="link.title"
    :aria-label="link.title"
    target="_blank"
    rel="noopener"
    class="icon-btn"
  >
    <i
      :class="link.iconName"
      aria-hidden="true"
    />
  </a>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },
})
</script>
