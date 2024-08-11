<template>
  <div class="main-content">
    <Navbar :items="navItems" @item-select="setActiveNavItem" />
    <AboutMe :class="{ active: activeNavItem === 'about' }" />
    <Resume :class="{ active: activeNavItem === 'resume' }" />
    <Portfolio :class="{ active: activeNavItem === 'portfolio' }" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Navbar from "./Navbar.vue"
import { AboutMe, Resume, Portfolio } from "./Details/index.js"

const activeNavItem = ref("about")

const navItems = [
  { id: "about", title: "About" },
  { id: "resume", title: "Resume" },
  { id: "portfolio", title: "Portfolio" }
]

const setActiveNavItem = (item) => {
  activeNavItem.value = item.id
}
</script>
