<template>
  <section class="relative w-full min-w-0">
    <TheNavbar
      :items="navItems"
      :active-item-id="activeItemId"
      @item-select="goTo"
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
import { useNumberKeyNav } from "@/composables/useNumberKeyNav.js"

const navItems = [
  { id: "about", title: "About", icon: "ri-user-3-line", component: AboutMe },
  { id: "resume", title: "Resume", icon: "ri-sword-line", component: Resume },
  { id: "projects", title: "Projects", icon: "ri-gamepad-line", component: Portfolio },
  { id: "reading-list", title: "Reading", icon: "ri-book-2-line", component: ReadingList },
]

const { activeItemId, goTo } = useScrollSpy(navItems)
useNumberKeyNav(navItems, goTo)
</script>
