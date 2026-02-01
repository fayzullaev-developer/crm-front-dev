<script setup>
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');

    sidebar.classList.toggle('collapsed');
}
</script>

<template>
    <div class="sidebar" id="sidebar">
        <!-- Header -->
        <div class="p-3 align-items-center gap-2 company-name-short">
            <span class="logo">Inc</span>
        </div>

        <!-- Company -->
        <div class="px-3 company-name text-primary fw-semibold">
            <span class="text-nowrap">Kadirov Inc</span>
        </div>

        <!-- Profile -->
        <div class="profile d-flex align-items-center gap-3 p-3">
            <img src="@/assets/ameliya.png" alt="">
            <div class="profile-info">
                <div class="fw-semibold">Ameliya</div>
                <small class="text-muted">ameliya.cer@gmail.com</small>
            </div>
        </div>

        <!-- Menu -->
        <div class="px-2">
            <a href="#" class="menu-item">
                <img src="@/assets/contacts.svg" alt="">
                <span class="menu-text">Foydalanuvchi qo‘shish</span>
            </a>

            <a href="#" class="menu-item">
                <img src="@/assets/company.svg" alt="">
                <span class="menu-text">Kompaniyalar</span>
            </a>

            <a href="#" class="menu-item">
                <img src="@/assets/clients.svg" alt="">
                <span class="menu-text">Mijozlar</span>
            </a>

            <a href="#" class="menu-item">
                <img src="@/assets/settings.svg" alt="">
                <span class="menu-text">Sozlamalar</span>
            </a>
        </div>

        <!-- Collapse Button -->
        <div class="bottom-toggle">
            <button class="btn btn-light w-100" @click="toggleSidebar()">
                <img src="@/assets/toggle.svg" id="toggleIcon" alt="" class="me-2">
                <span class="menu-text">Menyuni yopish</span>
            </button>
        </div>
    </div>

</template>

<style scoped>
body {
    margin: 0;
}

.sidebar {
    width: 260px;
    height: 100vh;
    background: #fff;
    border-right: 1px solid #e5e7eb;
    transition: width 0.3s;
    display: flex;
    flex-direction: column;
}

.sidebar .company-name-short {
    display: none;
}

.sidebar.collapsed {
    width: 80px;
}

.logo {
    font-weight: 600;
    color: #0d6efd;
    font-size: 20px;
}

.profile img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
}

.sidebar.collapsed .profile-info,
.sidebar.collapsed .menu-text,
.sidebar.collapsed .company-name {
    display: none;
}

.sidebar.collapsed .company-name-short {
    display: flex;
}

.menu-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    color: #111;
    text-decoration: none;
    border-radius: 8px;
}

.menu-item:hover {
    background: #f1f5f9;
}

.menu-item i {
    font-size: 20px;
    color: #0d6efd;
}

.bottom-toggle {
    margin-top: auto;
    padding: 16px;
}

</style>