import { createApp } from "vue";
import App from "./App.vue";
import { SetupCalendar, Calendar, DatePicker } from "v-calendar";

import { Icon } from "@iconify/vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/app.scss";
import "./assets/animate.css";
import "aos/dist/aos.css";
const app = createApp(App);
app.use(router, Icon);
app.use(SetupCalendar, {});
// Use the components
app.component("Calendar", Calendar);
app.component("DatePicker", DatePicker);
app.mount("#app");

app.config.globalProperties.imageAssets = (imageName) =>
  require("@/assets/img/" + imageName);
app.config.globalProperties.backgroundAssets = (backgroundName) =>
  require("@/assets/background/" + backgroundName);
// Setup plugin for defaults or `$screens` (optional)
