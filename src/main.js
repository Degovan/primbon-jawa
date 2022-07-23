import { createApp } from "vue";
import App from "./App.vue";
import { SetupCalendar, Calendar, DatePicker } from "v-calendar";

import { Icon } from "@iconify/vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/app.scss";
import "./assets/animate.css";
import "aos/dist/aos.css";
import axios from "axios";

import { ObserveVisibility } from "vue-observe-visibility";

const app = createApp(App);
app.use(router, Icon);
app.use(SetupCalendar, {});

app.directive("observe-visibility", {
  beforeMount: ObserveVisibility.beforeMount,
  update: ObserveVisibility.update,
  unmounted: ObserveVisibility.unbind,
});
app.component("Calendar", Calendar);
app.component("DatePicker", DatePicker);

app.mount("#app");

// check if url domain use localhost or not
// app.config.globalProperties.$baseURL = "http://192.168.0.105:3333/api/v1/";
// app.config.globalProperties.$baseIMG = "http://192.168.0.105:3333/pages/";
app.config.globalProperties.$baseURL =
  "https://backend.primbonjawa.net/api/v1/";
app.config.globalProperties.$baseIMG = "https://primbonjawa.net/pages/";

app.config.globalProperties.imageAssets = (imageName) =>
  require("@/assets/img/" + imageName);
app.config.globalProperties.iconsAssets = (iconName) =>
  require("@/assets/icons/" + iconName);
app.config.globalProperties.backgroundAssets = (backgroundName) =>
  require("@/assets/background/" + backgroundName);
// Setup plugin for defaults or `$screens` (optional)
