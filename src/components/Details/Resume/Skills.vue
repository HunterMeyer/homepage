<template>
  <article class="flex flex-col gap-4">
    <header class="z-10 flex flex-row items-center gap-5">
      <div
        class="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-yellow-500 shadow-lg dark:bg-my-black-800/50"
      >
        <v-icon
          name="co-code"
          scale="1.2"
        />
      </div>
      <h3 class="text-2xl font-bold">Skills</h3>
    </header>

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
import { addIcons } from "oh-vue-icons"
import { CoCode } from "oh-vue-icons/icons"
import { skillsData } from "@/data/skills.js"
import SkillsItem from "./SkillsItem.vue"

addIcons(CoCode)

const items = skillsData.filter((item) => item.visible)
</script>
