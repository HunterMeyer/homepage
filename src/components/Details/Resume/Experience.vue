<template>
  <article class="flex flex-col gap-4">
    <TimelineHeader title="Experience" icon-name="ri-building-2-line" />

    <section class="ml-16">
      <div class="ml-1">
        <TimelineItem
          v-for="(item, index) in items"
          :key="index"
          :title="item.company"
          :subtitle="item.role"
          :dates="item.dates"
          :url="item.url"
        />
      </div>
    </section>
  </article>
</template>

<script setup>
import { experienceData } from "@/data/experience.js"
import TimelineHeader from "./TimelineHeader.vue"
import TimelineItem from "./TimelineItem.vue"

const items = experienceData.filter((item) => item.visible)
</script>
