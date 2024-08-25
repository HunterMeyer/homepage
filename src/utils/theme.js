export const currentTheme = () => {
  return localStorage.getItem("theme")
}

export const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme)
  localStorage.setItem("theme", theme)
}

export const setInitialTheme = () => {
  const initialTheme = currentTheme() || "dark"
  setTheme(initialTheme)
}
