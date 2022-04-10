import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WetonView from "../views/Weton.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/weton",
    name: "weton",
    component: WetonView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
