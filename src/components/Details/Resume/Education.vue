<template>
  <article class="flex flex-col gap-4">
    <header class="flex flex-row gap-5 items-center z-10">
      <div class="flex justify-center items-center w-12 h-12 rounded-xl shadow-lg text-yellow-500 bg-white dark:bg-my-black-500">
        <v-icon name="co-school" scale="1.5" />
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

const items = educationData.filter(item => item.visible)
</script>
