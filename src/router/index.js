import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import("@/views/login/index")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;