import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./components/Main.vue"),
    },
    {
        path: "/posts",
        component: () => import("./components/Posts/Index.vue"),
        name: "posts.index",
    },
    {
        path: "/posts/create",
        component: () => import("./components/Posts/Create.vue"),
        name: "posts.create",
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
