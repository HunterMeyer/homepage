<template>
  <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <v-icon name="co-building" scale="1.5" />
      </div>
      <h3 class="h3">Experience</h3>
    </div>

    <ol class="timeline-list">
      <TimelineItem
        v-for="item in items"
        :title="item.company"
        :subtitle="item.role"
        :dates="item.dates"
        :url="item.url"
      />
    </ol>
  </section>
</template>

<script setup>
import experience from "../../../data/experience.js"
import { addIcons } from "oh-vue-icons"
import { CoBuilding } from "oh-vue-icons/icons"
import TimelineItem from "./TimelineItem.vue"

addIcons(CoBuilding)

const items = experience.filter(item => item.visible)
</script>
