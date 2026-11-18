<template>
  <section class="relative w-full">
    <TheNavbar
      :items="navItems"
      :active-item-id="activeItemId"
      @item-select="select"
    />
    <component
      :is="activeItem.component"
      :key="activeItemId"
    />
  </section>
</template>

<script setup>
import TheNavbar from "./TheNavbar.vue"
import { AboutMe, Portfolio, ReadingList, Resume } from "./Details/index.js"
import { useActiveSection } from "@/composables/useActiveSection.js"

const navItems = [
  { id: "about", title: "About", component: AboutMe },
  { id: "resume", title: "Resume", component: Resume },
  { id: "projects", title: "Projects", component: Portfolio },
  { id: "reading-list", title: "Reading", component: ReadingList },
]

const { activeItem, activeItemId, select } = useActiveSection(navItems)
</script>
