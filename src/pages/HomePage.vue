<script setup>
function toggleSidebar() {
    const offcanvas = document.getElementById('offcanvasNavigation');
    const sidebar = document.getElementById('sidebar');
    offcanvas.classList.toggle('collapsed');
    sidebar.classList.toggle('collapsed');
}
</script>

<template>
    <div class="col-auto">
        <!-- Offcanvas -->
        <div class="offcanvas-lg offcanvas-start" tabindex="-1" id="offcanvasNavigation" aria-labelledby="offcanvasNavigationLabel">

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
                        <img class="rounded-circle me-3" src="../assets/images/ameliya.png" alt="" width="46" height="46">
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
                            <img src="../assets/images/contacts-active.svg" alt="" class="me-2">
                            <span class="menu-text">Foydalanuvchi qo'shish</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu px-0" href="#">
                            <img src="../assets/images/company.svg" alt="" class="me-2">
                            <span class="menu-text">Kompaniyalar</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu px-0" href="#">
                            <img src="../assets/images/clients.svg" alt="" class="me-2">
                            <span class="menu-text">Mijozlar</span>
                        </a>
                    </li>
                </ul>

                <hr class="mt-0 border-secondary" />

                <!-- Settings -->
                <div class="nav px-4">
                    <a class="nav-link menu px-0" href="#">
                        <img src="../assets/images/settings.svg" alt="" class="me-2">
                        <span class="menu-text">Sozlamalar</span>
                    </a>
                </div>

                <!-- Close menu -->
                <div class="nav px-4 mt-auto mb-3">
                    <button class="nav-link email px-0" @click="toggleSidebar()">
                        <img src="../assets/images/toggle.svg" alt="" class="mx-1 me-2">
                        <span class="menu-text">Menyuni yopish</span>
                    </button>
                </div>
            </aside>
        </div>
    </div>

    <div class="col mx-sm-4 mx-auto">
        <!-- Add -->
        <div class="d-flex bg-white justify-content-end">
            <nav class="navbar navbar-expand-lg justify-content-between ms-2">
                <button class="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavigation"
                        aria-controls="offcanvasNavigation"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
            <button class="btn btn-primary ms-auto m-2 btn-add">Foydalanuvchi qo'shish</button>
        </div>

        <!-- Company select -->
        <div class="my-3 company-select">
            <label for="company">Kompaniya:&nbsp;</label>
            <select name="company" id="company">
                <option selected>Hammasi</option>
                <option value="">Company1</option>
                <option value="">Company2</option>
            </select>
        </div>

        <!-- Searching -->

        <div class="row g-2 justify-content-between">

            <div class="col-12 col-md">
                <div class="d-flex search">
                    <img src="@/assets/images/search.svg" alt="">
                    <input type="text" class="align-middle" placeholder="Foydalanuvchini qidirish" />
                </div>
            </div>

            <div class="col-12 col-md">
                <div class="d-flex search">
                    <img src="@/assets/images/search.svg" alt="">
                    <input type="text" class="align-middle" placeholder="Emailni qidirish" />
                </div>
            </div>

            <div class="col-12 col-md">
                <div class="d-flex search">
                    <img src="@/assets/images/search.svg" alt="">
                    <input type="text" class="align-middle" placeholder="Parolni qidirish" />
                </div>
            </div>

            <div class="col-12 col-md">
                <div class="d-flex search">
                    <img src="@/assets/images/search.svg" alt="">
                    <input type="text" class="align-middle" placeholder="So'nggi faollikni qidirish" />
                </div>
            </div>
            
        </div>
        
        <!-- Table -->
        <div class="table-responsive mt-3 shadow">
            <table class="table mb-0 align-middle">
                <thead class="p-3">
                    <tr>
                        <th scope="col" class="ps-3 py-3 w-25">Foydalanuvchilar</th>
                        <th scope="col" class="py-3 w-25">Email</th>
                        <th scope="col" class="py-3 w-25">Parol</th>
                        <th scope="col" class="pe-3 py-3 w-25">So'nggi faollik</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="ps-3 py-3 w-25">Lindsey Stroud</td>
                        <td class="py-3 w-25 text-truncate">lindsey.stroud@gmail.com</td>
                        <td class="py-3 w-25">12345678</td>
                        <td class="pe-3 py-3 w-25">5 minut oldin</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>

<style scoped>

input, select {
    outline: none;
}

table {
    table-layout: fixed;
    width: 100%;
}

th {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 13px;
    opacity: 0.5;
    color: #334d6e;
}

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

.btn-add {
    height: 42px;
    margin-top: 9px !important;
    margin-right: 12px !important;
    margin-bottom: 9px !important;
    background-color: #109cf1;
    border-color: #109cf1;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 13px;
}

.company-select {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: #707683;
}

.company-select select {
    border: none;
    color: #109cf1;
    appearance: none;
    background: url("@/assets/images/polygon.svg") 100% / 10% no-repeat;
}

.search {
    width: auto;
    height: 42px;
    background-color: #fff;
    box-shadow: 0 1px 6px 0 rgb(0, 0, 0, 25%);
}

.search img {
    margin: 11px 12px 11px 18px;
}

.search input {
    border: none;
}

.search input::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
}

</style>