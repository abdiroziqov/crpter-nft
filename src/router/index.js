import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import("../views/Upload.vue"),
  },
  {
    path: "/single-collectible",
    name: "single-collectible",
    component: () => import("../views/SingleCollectible"),
  },
  {
    path: "/connect-wallet",
    name: "connect-wallet",
    component: () => import("../views/ConnectWallet"),
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("../views/FAQ"),
  },
  {
    path: "/search-notif",
    name: "search-notif",
    component: () => import("../views/SNotifation"),
  },
  {
    path: "/activity",
    name: "activity",
    component: () => import("../views/Activity"),
  },  
  {
    path: "/example",
    name: "example",
    component: () => import("../views/Example"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/Search"),
  },
  {
    path: "/item",
    name: "item",
    component: () => import("../views/Item"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/no-router/Profile"),
  },
  {
    path: "/edit-profile",
    name: "edit-profile",
    component: () => import("../views/EditProfile.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
