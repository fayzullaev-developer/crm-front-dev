<script setup>
import Sidebar from "@/components/Sidebar.vue";
import FormButton from "@/components/tags/FormButton.vue";
</script>

<template>
    <div class="col-sm-auto">
        <Sidebar />
    </div>

    <div class="col mx-sm-4 mx-auto">
        <div class="m-4">
            <p>Bu yerda sozlamalar joylashadi</p>
            <FormButton text="Chiqish" />
        </div>
    </div>

</template>

<style scoped>

</style>