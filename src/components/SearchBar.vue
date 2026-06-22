<script setup>

</script>

<template>
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

</template>

<style scoped>
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

</style>