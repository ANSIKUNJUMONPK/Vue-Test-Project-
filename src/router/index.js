import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    meta: { layout: "HomeLayout" },
    component: HomeView,
  },
  {
    path: "/services",
    name: "ServicesView",
    component: () => import("../views/ServicesView.vue"),
  },
  {
    path: "/choose",
    name: "ChooseView",
    component: () => import("../views/ChooseView.vue"),
  },
  {
    path: "/team",
    name: "TeamView",
    component: () => import("../views/TeamView.vue"),
  },

  {
    path: "/about",
    name: "AboutView",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "ContactUsView",
    component: () => import("../views/ContactUsView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
