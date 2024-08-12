<template>
  <section class="skill">
    <div class="title-wrapper">
      <div class="icon-box">
        <v-icon name="co-code" scale="1.4" />
      </div>
      <h3 class="h3">Skills</h3>
    </div>

    <ul class="skills-list content-card">
      <SkillItem
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :level="item.level"
      />
    </ul>
  </section>
</template>

<script setup>
import skills from "../../../data/skills.js"
import { addIcons } from "oh-vue-icons"
import { CoCode } from "oh-vue-icons/icons"
import SkillItem from "./SkillItem.vue"

addIcons(CoCode)

const items = skills.filter(item => item.visible)
</script>
