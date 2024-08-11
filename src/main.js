import "./assets/css/main.css"

import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"

import { OhVueIcon } from "oh-vue-icons";

const app = createApp(App)

app.use(createPinia())

app.component("v-icon", OhVueIcon);
app.mount("#app")
