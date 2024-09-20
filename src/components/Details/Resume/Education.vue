<template>
  <article class="flex flex-col gap-4">
    <header class="z-10 flex flex-row items-center gap-5">
      <div
        class="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-yellow-500 shadow-lg dark:bg-my-black-800/50"
      >
        <v-icon
          name="co-school"
          scale="1.5"
        />
      </div>
      <h3 class="text-2xl font-bold">Education</h3>
    </header>

    <section class="ml-16">
      <div class="ml-1">
        <TimelineItem
          v-for="(item, index) in items"
          :key="index"
          :title="item.school"
          :subtitle="item.degree"
          :dates="item.dates"
          :url="item.url"
        />
      </div>
    </section>
  </article>
</template>

<script setup>
import { addIcons } from "oh-vue-icons"
import { CoSchool } from "oh-vue-icons/icons"
import { educationData } from "@/data/education.js"
import TimelineItem from "./TimelineItem.vue"

addIcons(CoSchool)

const items = educationData.filter((item) => item.visible)
</script>
