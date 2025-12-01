import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    // 其他路由...
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});