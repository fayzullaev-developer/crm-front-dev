<script setup>
function toggleSidebar() {
    const offcanvas = document.getElementById('offcanvasNavigation');
    const sidebar = document.getElementById('sidebar');
    offcanvas.classList.toggle('collapsed');
    sidebar.classList.toggle('collapsed');
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
                        <img src="@/assets/images/contacts-active.svg" alt="" class="me-2">
                        <span class="menu-text">Foydalanuvchi qo'shish</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link font-poppins fw-semibold fs-13 text-p-dark px-0" to="/company-page">
                        <img src="@/assets/images/company.svg" alt="" class="me-2">
                        <span class="menu-text">Kompaniyalar</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link font-poppins fw-semibold fs-13 text-p-dark px-0" to="/client-page">
                        <img src="@/assets/images/clients.svg" alt="" class="me-2">
                        <span class="menu-text">Mijozlar</span>
                    </router-link>
                </li>
            </ul>

            <hr class="mt-0 border-secondary" />

            <!-- Settings -->
            <div class="nav px-4">
                <a class="nav-link font-poppins fw-semibold fs-13 text-p-dark px-0" href="#">
                    <img src="@/assets/images/settings.svg" alt="" class="me-2">
                    <span class="menu-text">Sozlamalar</span>
                </a>
            </div>

            <!-- Close menu -->
            <div class="nav px-4 mt-auto mb-3">
                <button class="nav-link font-poppins fw-medium fs-11 text-p-gray px-0" @click="toggleSidebar()">
                    <img src="@/assets/images/toggle.svg" alt="" class="mx-1 me-2">
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