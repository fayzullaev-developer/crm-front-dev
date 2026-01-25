<script setup>

</script>

<template>
    <!-- Sidebar -->
    <aside class="sidebar shadow d-flex flex-column p-0">
        <!-- Logo -->
        <div class="p-3">
                    <span class="logo ms-2">
                        Kadirov Inc
                    </span>
        </div>

        <hr class="mt-0 border-secondary" />

        <!-- Profile -->
        <div class="d-flex dropdown pt-2 px-4">
            <div>
                <img class="rounded-circle me-3" src="@/assets/ameliya.png" alt="" width="46" height="46">
            </div>
            <div class="d-flex flex-wrap">
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
                    Foydalanuvchi qo'shish
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link menu px-0" href="#">
                    <img src="@/assets/company.svg" alt="" class="me-2">
                    Kompaniyalar
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link menu px-0" href="#">
                    <img src="@/assets/clients.svg" alt="" class="me-2">
                    Mijozlar
                </a>
            </li>
        </ul>

        <hr class="mt-0 border-secondary" />

        <!-- Settings -->
        <div class="nav px-4">
            <a class="nav-link menu px-0" href="#">
                <img src="@/assets/settings.svg" alt="" class="me-2">
                Sozlamalar
            </a>
        </div>

        <!-- Close menu -->
        <div class="nav px-4 mt-auto mb-3">
            <a class="nav-link email px-0" href="#">
                <img src="@/assets/toggle.svg" alt="" class="mx-1 me-2">
                Menyuni yopish
            </a>
        </div>

    </aside>

    <div class="col">
        test
    </div>
</template>

<style scoped>
.sidebar {
    width: 256px;
    background: #fff;
    min-height: 100vh;
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

.menu {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 13px;
    color: #334d6e;
}

</style>