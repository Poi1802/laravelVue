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
    {
        path: "/posts/:id",
        component: () => import("./components/Posts/Show.vue"),
        name: "posts.show",
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
