<template>
  <button
    @click="toggleTheme"
    title="Toggle theme"
    class="flex rounded-sm text-yellow-500"
  >
    <v-icon
      :name="themeIcon"
      scale="1.1"
      label="Toggle theme"
    />
  </button>
</template>

<script setup>
import { onBeforeMount, ref } from "vue"
import { addIcons } from "oh-vue-icons"
import { RiSunFill, RiMoonClearFill } from "oh-vue-icons/icons"
import { Themes, currentTheme, saveTheme } from "@/utils/theme.js"

addIcons(RiSunFill, RiMoonClearFill)

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
