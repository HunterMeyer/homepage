<template>
<button
  @click="toggleTheme"
  class="theme-toggle"
  title="Toggle theme"
>
  <v-icon :name="themeIcon" />
</button>
</template>

<script setup>
import { onBeforeMount, ref } from "vue"
import { addIcons } from "oh-vue-icons"
import { CoSun, CoMoon } from "oh-vue-icons/icons"
import { currentTheme, setTheme } from "@/utils/theme.js"

addIcons(CoSun, CoMoon)

const themeIcon = ref()

onBeforeMount(() => {
  setThemeIcon()
})

const setThemeIcon = () => {
  const icon = currentTheme() === "light" ? "co-moon" : "co-sun"
  themeIcon.value = icon
}

const toggleTheme = () => {
  const theme = currentTheme() === "light" ? "dark" : "light"
  setTheme(theme)
  setThemeIcon()
}
</script>
