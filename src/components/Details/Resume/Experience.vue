<template>
  <article class="flex flex-col gap-4">
    <header class="z-10 flex flex-row items-center gap-5">
      <div
        class="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-yellow-500 shadow-lg dark:bg-my-black-800/50"
      >
        <v-icon
          name="co-building"
          scale="1.2"
        />
      </div>
      <h3 class="text-2xl font-bold">Experience</h3>
    </header>

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
import { addIcons } from "oh-vue-icons"
import { CoBuilding } from "oh-vue-icons/icons"
import { experienceData } from "@/data/experience.js"
import TimelineItem from "./TimelineItem.vue"

addIcons(CoBuilding)

const items = experienceData.filter((item) => item.visible)
</script>
