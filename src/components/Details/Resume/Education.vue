<template>
  <article class="flex flex-col gap-4">
    <TimelineHeader
      title="Education"
      icon-name="ri-book-open-line"
    />

    <ol class="ml-[21.5px] border-l border-neon-cyan/25">
      <TimelineItem
        v-for="(item, index) in items"
        :key="index"
        :title="item.school"
        :subtitle="item.degree"
        :dates="item.dates"
        :url="item.url"
      />
    </ol>
  </article>
</template>

<script setup>
import { educationData } from "@/data/education.js"
import TimelineHeader from "./TimelineHeader.vue"
import TimelineItem from "./TimelineItem.vue"

const items = educationData.filter((item) => item.visible)
</script>
