<template>
  <button
    @click="toggleTheme"
    title="Toggle theme"
    class="flex rounded-sm text-yellow-500"
  >
    <i :class="themeIcon" />
  </button>
</template>

<script setup>
import { onBeforeMount, ref } from "vue"
import { Themes, currentTheme, saveTheme } from "@/utils/theme.js"

const themeIcon = ref()

onBeforeMount(() => {
  setThemeIcon()
})

const setThemeIcon = () => {
  const icon = currentTheme() === Themes.LIGHT ? "ri-moon-clear-fill" : "ri-sun-fill"
  themeIcon.value = icon
}

const toggleTheme = () => {
  const theme = currentTheme() === Themes.LIGHT ? Themes.DARK : Themes.LIGHT
  saveTheme(theme)
  setThemeIcon()
}
</script>
