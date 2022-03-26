import { createApp } from "vue";
import App from "./App.vue";
let jsonKey = require("./secrets/api-key.json");

createApp(App).mount("#app");
