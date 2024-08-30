const isLocalStorageDark = () => localStorage.theme === Themes.DARK
const isNoLocalThemeSet = () => !("theme" in localStorage)
const isOSPreferDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches

const applyTheme = (theme) => {
  const classList = document.documentElement.classList
  const themeTag = document.querySelector("meta[name='theme-color']")

  if (theme === Themes.DARK) {
    classList.add(Themes.DARK)
    themeTag.setAttribute("content", "#121212");
  } else {
    classList.remove(Themes.DARK)
    themeTag.setAttribute("content", "#E7E5E4");
  }
}

export const Themes = {
  DARK: "dark",
  LIGHT: "light",
  OS: "os",
}

export const themePreference = () => {
  return (localStorage.theme || Themes.OS)
}

export const currentTheme = () => {
  if (isLocalStorageDark() || (isNoLocalThemeSet() && isOSPreferDark())) {
    return Themes.DARK
  }

  return Themes.LIGHT
}

export const setInitialTheme = () => {
  applyTheme(currentTheme())
}

export const saveTheme = (theme) => {
  if (theme === Themes.OS) {
    localStorage.removeItem("theme")
  } else {
    localStorage.theme = theme
  }

  applyTheme(currentTheme())
}
