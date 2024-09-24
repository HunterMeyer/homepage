<template>
  <article class="flex flex-col gap-4">
    <TimelineHeader title="Skills" icon-name="ri-code-s-slash-line" />

    <section class="flex flex-col gap-5 p-2">
      <SkillsItem
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :level="item.level"
      />
    </section>
  </article>
</template>

<script setup>
import { skillsData } from "@/data/skills.js"
import TimelineHeader from "./TimelineHeader.vue"
import SkillsItem from "./SkillsItem.vue"

const items = skillsData.filter((item) => item.visible)
</script>
