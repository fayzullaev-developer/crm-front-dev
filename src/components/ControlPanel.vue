<script setup>

</script>

<template>
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

</template>

<style scoped>
.btn-add {
    height: 42px;
    margin-top: 9px !important;
    margin-right: 12px !important;
    margin-bottom: 9px !important;
    background-color: #109cf1;
    border-color: #109cf1;
}

/* Select company - start */
.company select {
    border: none;
    color: #109cf1;
    appearance: none;
    background: url("@/assets/images/polygon.svg") 100% / 10% no-repeat;
}
/* Select company - end */

</style>