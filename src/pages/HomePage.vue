<script setup>
function toggleSidebar() {
    const offcanvas = document.getElementById('offcanvasNavigation');
    const sidebar = document.getElementById('sidebar');
    offcanvas.classList.toggle('collapsed');
    sidebar.classList.toggle('collapsed');
}

// toast'ni ishga tushirish
function showToast() {
    const element = document.getElementById('liveToast');
    const toast = window.bootstrap.Toast.getOrCreateInstance(element);
    toast.show();
}

</script>

<template>
    <div class="col-sm-auto">
        <!-- Offcanvas -->
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
                        <a class="nav-link font-poppins fw-semibold fs-13 text-p-dark px-0 active" href="#">
                            <img src="@/assets/images/contacts-active.svg" alt="" class="me-2">
                            <span class="menu-text">Foydalanuvchi qo'shish</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link font-poppins fw-semibold fs-13 text-p-dark px-0" href="#">
                            <img src="@/assets/images/company.svg" alt="" class="me-2">
                            <span class="menu-text">Kompaniyalar</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link font-poppins fw-semibold fs-13 text-p-dark px-0" href="#">
                            <img src="@/assets/images/clients.svg" alt="" class="me-2">
                            <span class="menu-text">Mijozlar</span>
                        </a>
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
            <button
                type="button"
                class="btn btn-primary ms-auto m-2 btn-add font-poppins fw-medium fs-13"
                data-bs-toggle="modal"
                data-bs-target="#modalAdd">
                    Foydalanuvchi qo'shish
            </button>
        </div>

        <!-- Company select -->
        <div class="my-3 font-poppins fs-12 text-p-gray company">
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
        <div class="table-responsive mt-3 shadow rounded-top">
            <table class="table mb-0 align-middle font-poppins fs-13">
                <thead class="p-3">
                    <tr>
                        <th scope="col" class="ps-3 ps-md-4 py-2 py-sm-3 align-middle text-break">Foy<wbr>da<wbr>la<wbr>nuv<wbr>chi<wbr>lar</th>
                        <th scope="col" class="py-2 py-sm-3 align-middle text-break">Email</th>
                        <th scope="col" class="py-2 py-sm-3 align-middle text-break">Parol</th>
                        <th scope="col" class="py-2 py-sm-3 align-middle text-break">So'nggi faollik</th>
                        <th scope="col" class="pe-3 pe-md-4 py-2 py-sm-3 action-col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="ps-3 ps-md-4 py-2 py-sm-3 w-23">
                            <img class="rounded-circle me-3" src="@/assets/images/lindsey_stroud.png" alt="" width="24" height="24">
                            <span class="fw-medium fs-15 text-p-muted text-break">Lindsey Stroud</span>
                        </td>
                        <td class="py-2 py-sm-3 text-break">lindsey.stroud@gmail.com</td>
                        <td class="py-2 py-sm-3">12345678</td>
                        <td class="py-2 py-sm-3 text-break">5 minut oldin</td>
                        <td class="pe-3 pe-md-4 py-2 py-sm-3">
                            <div class="d-flex justify-content-evenly">
                                <button type="button" class="img-btn" data-bs-target="#modalChange" data-bs-toggle="modal">
                                    <img src="@/assets/images/edit.svg" alt="edit">
                                </button>
                                <button type="button" class="img-btn" data-bs-target="#modalDelete" data-bs-toggle="modal">
                                    <img src="@/assets/images/delete.svg" alt="delete">
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="ps-3 ps-md-4 py-2 py-sm-3">
                            <img class="rounded-circle me-3" src="@/assets/images/nicci_troiani.png" alt="" width="24" height="24">
                            <span class="fw-medium fs-15 text-p-muted">Nicci Troiani</span>
                        </td>
                        <td class="py-2 py-sm-3 text-break">nicci.troiani@gmail.com</td>
                        <td class="py-2 py-sm-3">12345678</td>
                        <td class="py-2 py-sm-3">14 minut oldin</td>
                        <td class="pe-3 pe-md-4 py-2 py-sm-3">
                            <div class="d-flex justify-content-evenly">
                                <img src="@/assets/images/edit.svg" alt="edit">
                                <img src="@/assets/images/delete.svg" alt="delete">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="ps-3 ps-md-4 py-2 py-sm-3">
                            <img class="rounded-circle me-3" src="@/assets/images/george_fields.png" alt="" width="24" height="24">
                            <span class="fw-medium fs-15 text-p-muted">George Fields</span>
                        </td>
                        <td class="py-2 py-sm-3 text-break">george.fields@gmail.com</td>
                        <td class="py-2 py-sm-3">12345678</td>
                        <td class="py-2 py-sm-3">6 minut oldin</td>
                        <td class="pe-3 pe-md-4 py-2 py-sm-3">
                            <div class="d-flex justify-content-evenly">
                                <img src="@/assets/images/edit.svg" alt="edit">
                                <img src="@/assets/images/delete.svg" alt="delete">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>

    <!-- Modal for add -->
    <div class="modal fade bg-white bg-opacity-75"
         id="modalAdd"
         tabindex="-1"
         aria-labelledby="staticBackdropLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-add mx-auto">
            <div class="modal-content rounded-0 shadow border-0">
                <div class="modal-header justify-content-center">
                    <h1 class="modal-title font-poppins fw-semibold fs-13" id="staticBackdropLabel">
                        Foydalanuvchi qo'shish
                    </h1>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="mb-3">
                            <label for="name" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Ism<span class="text-p-blue">*</span>
                            </label>
                            <input type="text"
                                   class="form-control rounded-2 font-poppins fw-normal fs-14"
                                   id="name"
                                   placeholder="Name" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Email<span class="text-p-blue">*</span>
                            </label>
                            <input type="text"
                                   class="form-control rounded-2 font-poppins fw-normal fs-14"
                                   id="email"
                                   placeholder="example@mail.com" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Parol<span class="text-p-blue">*</span>
                            </label>
                            <input type="text"
                                   class="form-control rounded-2 font-poppins fw-normal fs-14"
                                   id="password"
                                   placeholder="Parol" />
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="button"
                                    @click="showToast"
                                    class="btn btn-primary rounded-1 btn-modal-add font-poppins fw-normal fs-13"
                                    data-bs-dismiss="modal">
                                Qo'shish
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal for edit -->
    <div class="modal fade"
         id="modalChange"
         data-bs-backdrop="static"
         data-bs-keyboard="true"
         tabindex="-1"
         aria-labelledby="modalChangeLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modalChangeLabel">O'zgartirish</h1>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="mb-3">
                            <label for="name" class="col-form-label">Ism*</label>
                            <input type="text" class="form-control" id="name" placeholder="Name" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="col-form-label">Email*</label>
                            <input type="text" class="form-control" id="email" placeholder="example@mail.com" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="col-form-label">Parol*</label>
                            <input type="text" class="form-control" id="password" placeholder="Parol" />
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button"
                            @click="showToast"
                            class="btn btn-primary"
                            data-bs-dismiss="modal">
                        O'zgartirish
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal for delete -->
    <div class="modal fade bg-white bg-opacity-75"
         id="modalDelete"
         tabindex="-1"
         aria-labelledby="modalDeleteLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-top modal-delete">
            <div class="modal-content rounded-min shadow border-0">
                <div class="modal-body d-flex justify-content-between align-items-center px-4">
                    <span class="mb-0 font-poppins fw-normal fs-15">Rostdan ham o'chirilsinmi?</span>
                    <div class="ms-3">
                        <button type="button" 
                                class="btn btn-yes bg-p-red text-white rounded-min border-0 py-1 me-3 font-poppins fw-normal fs-15">
                            Ha
                        </button>
                        <button type="button"
                                class="btn btn-no bg-p-green text-white rounded-min border-0 py-1 font-poppins fw-normal fs-15"
                                data-bs-dismiss="modal">
                            Yo'q
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Toast -->
    <div class="toast-container position-fixed start-50 toast-position translate-middle-x">
        <div id="liveToast"
             class="toast text-white bg-p-green rounded-1 border-0"
             role="alert"
             aria-live="assertive"
             aria-atomic="true">
            <div class="toast-body">
                <img src="@/assets/images/check.svg" class="rounded me-2" alt="">
                Ma'lumotlar muvaffaqiyatli qo'shildi
            </div>
        </div>
    </div>

</template>

<style scoped>

/* General style - start */

input, select {
    outline: none;
}

/* FONTS */
.font-poppins { font-family: 'Poppins', sans-serif; }
.font-open-sans { font-family: 'Open Sans', sans-serif; }

/* SIZE */
.fs-11 { font-size: 11px; }
.fs-12 { font-size: 12px; }
.fs-13 { font-size: 13px; }
.fs-14 { font-size: 14px; }
.fs-15 { font-size: 15px; }
.fs-18 { font-size: 18px; }

/* .fs-16 { font-size: 16px; }
    .fs-24 { font-size: 24px; } */

/* WEIGHT
    .fw-p-thin { font-weight: 100; }
    .fw-p-ex-light { font-weight: 200; }
    .fw-p-ex-bold { font-weight: 800; }
    .fw-p-black { font-weight: 900; } */

/* TEXT COLOR */
.text-p-blue { color: #109cf1; }
.text-p-dark { color: #334d6e; }
.text-p-muted { color: #323c47; }
.text-p-gray { color: #707683; }

/* BACKGROUND COLOR */
.bg-p-blue { background-color: #109cf1; }
.bg-p-green { background-color: #34d47e; }
.bg-p-red { background-color: #f7685b; }

.rounded-min { border-radius: 2px; }
/* General style - end */

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

/* Buttons - start */
.btn-add {
    height: 42px;
    margin-top: 9px !important;
    margin-right: 12px !important;
    margin-bottom: 9px !important;
    background-color: #109cf1;
    border-color: #109cf1;
}

.btn-modal-add {
    height: 29px;
    padding: 2px 27px !important;
    background-color: #109cf1;
    border-color: #109cf1;
}

.btn-modal-add:focus {
    box-shadow: 0 0 0 1px #109cf1;
}

.btn-yes, .btn-no {
    width: 94px !important;
}
/* Buttons - end */

/* Modal - start */
.modal-add {
    width: 318px !important;
}

.modal-header {
    height: 50px !important;
}

.modal-delete {
    max-width: 513px !important;
}

.form-control::placeholder {
    opacity: 0.5;
}

.form-control:focus {
    box-shadow: none;
    border-color: #109cf1;
    background-color: rgb(16 156 241 / 0.16) !important;
}
/* Modal - end */

/* Select company - start */
.company select {
    border: none;
    color: #109cf1;
    appearance: none;
    background: url("@/assets/images/polygon.svg") 100% / 10% no-repeat;
}
/* Select company - end */

/* Search - start */
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
    flex-grow: 1;
    border: none;
}

.search input::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
}
/* Search - end */

/* Table - start */
@media (min-width: 650px) {
    .action-col {
        width: 120px;
        min-width: 120px;
    }
}

table {
    table-layout: fixed;
    width: 100%;
}

th {
    font-weight: 500;
    opacity: 0.5;
    color: #334d6e;
}

td {
    font-weight: 400;
    color: #707683;
}

.img-btn {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    transition: transform 0.1s ease;
}

.img-btn:active {
    transform: scale(0.92);
    filter: brightness(0.8);
}
/* Table - end */

/* toast style - start */
.toast {
    width: 312px;
    box-shadow: none;
}

.toast-position {
    top: 50px !important;
}
/* toast style - end */

</style>