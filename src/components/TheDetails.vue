<template>
  <section
    data-component="card"
    class="
      relative
      w-full
      p-4
      md:p-8
      rounded-3xl
      bg-stone-200
      dark:bg-my-black-700
      neu-shadow-inset-xs
    "
  >
    <TheNavbar :items="navItems" @item-select="setActive" />
    <AboutMe v-if="activeItemId === 'about'" />
    <Resume v-if="activeItemId === 'resume'" />
    <Portfolio v-if="activeItemId === 'portfolio'" />
  </section>
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
