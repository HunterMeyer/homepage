<template>
  <section class="relative w-full">
    <TheNavbar
      :items="navItems"
      :active-item-id="activeItemId"
      @item-select="select"
    />
    <div class="flex flex-col gap-4 md:gap-8">
      <component
        v-for="item in navItems"
        :is="item.component"
        :key="item.id"
        :id="item.id"
        class="scroll-mt-4 md:scroll-mt-28 lg:scroll-mt-32"
      />
    </div>
  </section>
</template>

<script setup>
import TheNavbar from "./TheNavbar.vue"
import { AboutMe, Portfolio, ReadingList, Resume } from "./Details/index.js"
import { useScrollSpy } from "@/composables/useScrollSpy.js"

const navItems = [
  { id: "about", title: "About", component: AboutMe },
  { id: "resume", title: "Resume", component: Resume },
  { id: "projects", title: "Projects", component: Portfolio },
  { id: "reading-list", title: "Reading", component: ReadingList },
]

const { activeItemId, select } = useScrollSpy(navItems)
</script>
