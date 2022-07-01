import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WetonView from "../views/Weton.vue";
import KalenderView from "../views/Kalender.vue";
import TerjemahanView from "../views/Terjemahan.vue";
import NotFound from "../views/page-error/404.vue";
import NetError from "../views/page-error/neterror.vue";
import Pages from "../views/Pages.vue";
import PagePost from "../views/PagePost.vue";

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
    path: "/pages",
    name: "pages",
    component: Pages,
    meta: { title: "Halaman | Primbon" },
  },
  {
    path: "/:slug",
    name: "post-page",
    component: PagePost,
    meta: { title: "Memuat Halaman..." },
  },
  {
    path: "/kalender",
    name: "kalender",
    component: KalenderView,
    meta: { title: "Kalender | Primbon" },
  },
  {
    path: "/terjemahan",
    name: "Terjemahan",
    component: TerjemahanView,
    meta: { title: "Terjemahan Indonesia ke jawa | Primbon" },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound,
    meta: { title: "Halaman Tidak Ditemukan | Primbon", hideNavigation: true },
  },
  {
    path: "/network-error",
    name: "neterror",
    component: NetError,
    meta: { title: " Opps!, endpoint cannot be reach", hideNavigation: true },
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
