import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WetonView from "../views/Weton.vue";
import KalenderView from "../views/Kalender.vue";
import NotFound from "../views/page-error/404.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Primbon | Ramalan Jodoh, Tanggal Weton, Perhitungan Selametan",
    },
  },
  {
    path: "/weton",
    name: "weton",
    component: WetonView,
    meta: { title: "Weton | Primbon" },
  },
  {
    path: "/kalender",
    name: "kalender",
    component: KalenderView,
    meta: { title: "Kalender | Primbon" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound,
    meta: { title: "Halaman Tidak Ditemukan | Primbon", hideNavigation: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  next();
});

export default router;
