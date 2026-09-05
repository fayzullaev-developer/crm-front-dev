import { defineAsyncComponent } from "vue";
import {createRouter, createWebHistory} from "vue-router";

const ifAuthorized = (to, from, next) => {
    if (localStorage.getItem("token") !== null) {
        next();
    } else {
        next('/login');
    }
}

const ifNotAuthorized = (to, from, next) => {
    if (localStorage.getItem("token") === null) {
        next();
    } else {
        next('/');
    }
}

const routes = [
    {
        path: '/',
        component: () => import( '@/pages/UserPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    },
    {
        path: '/company-page',
        component: () => import('@/pages/CompanyPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    },
    {
        path: '/client-page',
        component: () => import('@/pages/ClientPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    },
    {
        path: '/settings',
        component: () => import('@/pages/SettinsPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/BlankLayout.vue'))
        },
        beforeEnter: ifNotAuthorized
    },
    {
        path: '/test',
        component: () => import('@/pages/Test.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})