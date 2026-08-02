<script setup>
import Sidebar from "@/components/Sidebar.vue";
import ControlPanel from "@/components/ControlPanel.vue";
</script>

<template>
    <div class="col-sm-auto">
        <Sidebar />
    </div>

    <div class="col mx-sm-4 mx-auto">
        <ControlPanel button-text="Chiqish" />
        <div class="mt-4">
            <p>Bu yerda sozlamalar joylashadi</p>
        </div>
    </div>

</template>

<style scoped>

</style>