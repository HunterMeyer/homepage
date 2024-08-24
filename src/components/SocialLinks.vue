<template>
<ul class="social-list">
  <li class="social-item"
    v-for="(item, index) in items"
    :key="index"
  >
    <a
      :href="item.url"
      :title="item.title"
      target="_blank"
      class="social-link"
    >
      <v-icon :name="item.icon_name" />
    </a>
  </li>
</ul>
</template>

<script setup>
import { socialLinksData as items } from "@/data/social-links.js"
</script>
