import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./components/Main.vue"),
    },
    {
        path: "/posts",
        component: () => import("./components/Posts.vue"),
    },
    {
        path: "/tags",
        component: () => import("./components/Tags.vue"),
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
