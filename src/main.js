import "@/assets/css/main.css"
import { createApp } from "vue"
import { OhVueIcon } from "oh-vue-icons"
import App from "./App.vue"

const app = createApp(App)

app.component("v-icon", OhVueIcon)
app.mount("#app")
