<template>
  <section class="relative w-full">
    <TheNavbar
      :items="navItems"
      @item-select="setActive"
    />
    <template v-for="item in navItems">
      <component
        v-if="item.id === activeItemId"
        :is="item.component"
        :key="item.id"
      />
    </template>
  </section>
</template>

<script setup>
import { ref, computed } from "vue"
import TheNavbar from "./TheNavbar.vue"
import { AboutMe, Portfolio, ReadingList, Resume } from "./Details/index.js"

const activeItem = ref()

const activeItemId = computed(() => {
  return activeItem.value?.id
})

const navItems = [
  { id: "about", title: "About", component: AboutMe },
  { id: "resume", title: "Resume", component: Resume },
  { id: "projects", title: "Projects", component: Portfolio },
  { id: "reading-list", title: "Reading", component: ReadingList },
]

const setActive = (item) => {
  activeItem.value = item
}
</script>
