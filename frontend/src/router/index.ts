import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Order from "@/pages/Order.vue";
import WeChatQR from "@/pages/WeChatQR.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/order", name: "order", component: Order },
  { path: "/wechat", name: "wechat", component: WeChatQR },
  // 其他路由...
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});