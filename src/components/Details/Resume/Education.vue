<template>
  <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <v-icon name="co-school" scale="1.5" />
      </div>
      <h3 class="h3">Education</h3>
    </div>

    <ol class="timeline-list">
      <TimelineItem
        v-for="(item, index) in items"
        :key="index"
        :title="item.school"
        :subtitle="item.degree"
        :dates="item.dates"
        :url="item.url"
      />
    </ol>
  </section>
</template>

<script setup>
import { addIcons } from "oh-vue-icons"
import { CoSchool } from "oh-vue-icons/icons"
import { educationData } from "@/data/education.js"
import TimelineItem from "./TimelineItem.vue"

addIcons(CoSchool)

const items = educationData.filter(item => item.visible)
</script>
