import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/app.scss";
import "./assets/animate.css";
const app = createApp(App);
app.use(router);
app.mount("#app");

app.config.globalProperties.imageAssets = (imageName) =>
  require("@/assets/img/" + imageName);
app.config.globalProperties.backgroundAssets = (backgroundName) =>
  require("@/assets/background/" + backgroundName);
