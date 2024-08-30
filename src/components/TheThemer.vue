<template>
  <button
    @click="toggleTheme"
    title="Toggle theme"
    class="
      flex
      rounded-md
      p-0.5
      bg-my-black-400
      dark:bg-my-black-800
      text-white/80
      dark:text-yellow-500
    "
  >
    <v-icon :name="themeIcon" scale="0.8" label="Toggle theme" />
  </button>
</template>

<script setup>
import { onBeforeMount, ref } from "vue"
import { addIcons } from "oh-vue-icons"
import { CoSun, CoMoon } from "oh-vue-icons/icons"
import { Themes, currentTheme, saveTheme } from "@/utils/theme.js"

addIcons(CoSun, CoMoon)

const themeIcon = ref()

onBeforeMount(() => {
  setThemeIcon()
})

const setThemeIcon = () => {
  const icon = currentTheme() === Themes.LIGHT ? "co-moon" : "co-sun"
  themeIcon.value = icon
}

const toggleTheme = () => {
  const theme = currentTheme() === Themes.LIGHT ? Themes.DARK : Themes.LIGHT
  saveTheme(theme)
  setThemeIcon()
}
</script>
