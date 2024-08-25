<template>
  <div class="main-content">
    <TheNavbar :items="navItems" @item-select="setActive" />
    <AboutMe :class="{ active: activeItemId === 'about' }" />
    <Resume :class="{ active: activeItemId === 'resume' }" />
    <Portfolio :class="{ active: activeItemId === 'portfolio' }" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import TheNavbar from "./TheNavbar.vue"
import { AboutMe, Resume, Portfolio } from "./Details/index.js"

const activeItem = ref()

const activeItemId = computed(() => {
  return activeItem.value?.id
})

const navItems = [
  { id: "about", title: "About" },
  { id: "resume", title: "Resume" },
  { id: "portfolio", title: "Portfolio" },
]

const setActive = (item) => {
  activeItem.value = item
}
</script>
