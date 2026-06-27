import { defineAsyncComponent } from "vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import( '@/pages/UserPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        }
    },
    {
        path: '/company-page',
        component: () => import('@/pages/CompanyPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        }
    },
    {
        path: '/client-page',
        component: () => import('@/pages/ClientPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        }
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/BlankLayout.vue'))
        }
    },
    {
        path: '/test',
        component: () => import('@/pages/Test.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        }
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})