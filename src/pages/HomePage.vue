<script setup>
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}
</script>

<template>
    <!-- Sidebar -->
    <aside class="sidebar shadow d-flex flex-column p-0" id="sidebar">
        <!-- Logo -->
        <div class="p-3 align-items-center">
            <span class="logo ms-2 company-name text-nowrap">Kadirov Inc</span>
            <span class="logo ms-2 company-name-short d-none">Inc</span>
        </div>

        <hr class="mt-0 border-secondary" />

        <!-- Profile -->
        <div class="d-flex profile pt-2 px-4">
            <div>
                <img class="rounded-circle me-3" src="@/assets/ameliya.png" alt="" width="46" height="46">
            </div>
            <div class="d-flex flex-wrap profile-info">
                <div class="w-100">
                    <span class="name">Ameliya</span>
                </div>
                <div class="w-100 d-flex align-top">
                    <span class="email">ameliya.cer@gmail.com</span>
                </div>
            </div>
        </div>

        <!-- Menu -->
        <ul class="nav flex-column px-4 pt-4 pb-2 mt-2">
            <li class="nav-item">
                <a class="nav-link menu px-0 active" href="#">
                    <img src="@/assets/contacts-active.svg" alt="" class="me-2">
                    <span class="menu-text">Foydalanuvchi qo'shish</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link menu px-0" href="#">
                    <img src="@/assets/company.svg" alt="" class="me-2">
                    <span class="menu-text">Kompaniyalar</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link menu px-0" href="#">
                    <img src="@/assets/clients.svg" alt="" class="me-2">
                    <span class="menu-text">Mijozlar</span>
                </a>
            </li>
        </ul>

        <hr class="mt-0 border-secondary" />

        <!-- Settings -->
        <div class="nav px-4">
            <a class="nav-link menu px-0" href="#">
                <img src="@/assets/settings.svg" alt="" class="me-2">
                <span class="menu-text">Sozlamalar</span>
            </a>
        </div>

        <!-- Close menu -->
        <div class="nav px-4 mt-auto mb-3">
            <button class="nav-link email px-0" @click="toggleSidebar()">
                <img src="@/assets/toggle.svg" alt="" class="mx-1 me-2">
                <span class="menu-text">Menyuni yopish</span>
            </button>
        </div>

    </aside>

    <div class="flex-fill col m-4 bg-primary">
        test
    </div>
</template>

<style scoped>
.sidebar {
    width: 256px;
    background: #fff;
    min-height: 100vh;
}

.sidebar.collapsed {
    width: 68px;
}

.logo {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #109cf1;
}

.name {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
}

.email {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 11px;
    color: #707683;
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

.menu {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 13px;
    color: #334d6e;
}

</style>