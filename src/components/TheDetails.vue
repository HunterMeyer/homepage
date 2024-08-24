<template>
  <div class="main-content">
    <TheNavbar :items="navItems" @item-select="setActive" />
    <AboutMe :class="{ active: activeItemId === 'about' }" />
    <Resume :class="{ active: activeItemId === 'resume' }" />
    <Portfolio :class="{ active: activeItemId === 'portfolio' }" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import TheNavbar from "./TheNavbar.vue"
import { AboutMe, Resume, Portfolio } from "./Details/index.js"

const activeItemId = ref()

const navItems = [
  { id: "about", title: "About" },
  { id: "resume", title: "Resume" },
  { id: "portfolio", title: "Portfolio" },
]

const setActive = (itemId) => {
  activeItemId.value = itemId
}
</script>
