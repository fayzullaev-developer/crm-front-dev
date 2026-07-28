<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

import usersIcon from '@/assets/images/users.svg'
import usersActiveIcon from '@/assets/images/users-active.svg'
import companyIcon from '@/assets/images/company.svg'
import companyActiveIcon from '@/assets/images/company-active.svg'
import clientsIcon from '@/assets/images/clients.svg'
import clientsActiveIcon from '@/assets/images/clients-active.svg'
import settingsIcon from '@/assets/images/settings.svg'
import settingsActiveIcon from '@/assets/images/settings-active.svg'
import toggleIcon from '@/assets/images/toggle.svg'
import toggleActiveIcon from '@/assets/images/toggle-active.svg'

const route = useRoute()
const isCollapsed = ref(localStorage.getItem('sidebarCollapsed') === 'true')

onMounted(() => {
    const offcanvas = document.getElementById('offcanvasNavigation');
    const sidebar = document.getElementById('sidebar');

    if (isCollapsed.value) {
        offcanvas?.classList.add('collapsed');
        sidebar?.classList.add('collapsed');
    }
})

function toggleSidebar() {
    const offcanvas = document.getElementById('offcanvasNavigation');
    const sidebar = document.getElementById('sidebar');

    offcanvas.classList.toggle('collapsed');
    sidebar.classList.toggle('collapsed');

    isCollapsed.value = !isCollapsed.value
    localStorage.setItem('sidebarCollapsed', isCollapsed.value)
}

</script>

<template>
    <!-- Sidebar and offcanvas -->
    <div class="offcanvas-lg offcanvas-start"
         tabindex="-1"
         id="offcanvasNavigation"
         aria-labelledby="offcanvasNavigationLabel">

        <!-- Sidebar -->
        <aside class="sidebar shadow d-flex flex-column p-0" id="sidebar">
            <!-- Logo -->
            <div class="p-3 align-items-center">
                    <span class="font-open-sans fw-semibold fs-18 text-p-blue ms-2 company-name text-nowrap">
                        Kadirov Inc
                    </span>
                <span class="font-open-sans fw-semibold fs-18 text-p-blue ms-2 company-name-short d-none">Inc</span>
            </div>

            <hr class="mt-0 border-secondary" />

            <!-- Profile -->
            <div class="d-flex profile pt-2 px-4">
                <div>
                    <img class="rounded-circle me-3" src="@/assets/images/ameliya.png" alt="" width="46" height="46">
                </div>
                <div class="d-flex flex-wrap profile-info">
                    <div class="w-100">
                        <span class="font-poppins fs-14">Ameliya</span>
                    </div>
                    <div class="w-100 d-flex align-top">
                        <span class="font-poppins fw-medium fs-11 text-p-gray">ameliya.cer@gmail.com</span>
                    </div>
                </div>
            </div>

            <!-- Menu -->
            <ul class="nav flex-column px-4 pt-4 pb-2 mt-2">
                <li class="nav-item">
                    <router-link class="nav-link font-poppins fw-semibold fs-13 text-p-dark px-0 active" to="/">
                        <img
                            :src="route.path === '/' ? usersActiveIcon : usersIcon"
                            alt=""
                            class="me-2"
                        >
                        <span class="menu-text">Foydalanuvchilar</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link font-poppins fw-semibold fs-13 text-p-dark px-0" to="/company-page">
                        <img
                            :src="route.path === '/company-page' ? companyActiveIcon : companyIcon"
                            alt=""
                            class="me-2"
                        >
                        <span class="menu-text">Kompaniyalar</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link font-poppins fw-semibold fs-13 text-p-dark px-0" to="/client-page">
                        <img
                            :src="route.path === '/client-page' ? clientsActiveIcon : clientsIcon"
                            alt=""
                            class="me-2"
                        >
                        <span class="menu-text">Mijozlar</span>
                    </router-link>
                </li>
            </ul>

            <hr class="mt-0 border-secondary" />

            <!-- Settings -->
            <div class="nav px-4">
                <router-link class="nav-link font-poppins fw-semibold fs-13 text-p-dark px-0" to="/settings">
                    <img
                        :src="route.path === '/settings' ? settingsActiveIcon : settingsIcon"
                        alt=""
                        class="me-2"
                    >
                    <span class="menu-text">Sozlamalar</span>
                </router-link>
            </div>

            <!-- Close menu -->
            <div class="nav px-4 mt-auto mb-3">
                <button class="nav-link font-poppins fw-medium fs-11 text-p-gray px-0" @click="toggleSidebar()">
                    <img
                        :src="isCollapsed ? toggleActiveIcon : toggleIcon"
                        alt=""
                        class="mx-1 me-2"
                    >
                    <span class="menu-text">Menyuni yopish</span>
                </button>
            </div>
        </aside>
    </div>
</template>

<style scoped>

/* Sidebar - start */
.sidebar, .offcanvas-start {
    width: 256px;
    background: #fff;
    min-height: 100svh;
}

.offcanvas-start.collapsed {
    width: 68px;
}

.sidebar.collapsed {
    width: 68px;
}

.sidebar.collapsed .company-name-short {
    display: flex !important;
}

.sidebar.collapsed .company-name,
.sidebar.collapsed .profile-info,
.sidebar.collapsed .menu-text {
    display: none !important;
}

.sidebar.collapsed .profile {
    padding: 8px 11px 0 !important;
}
/* Sidebar - end */

</style>