<script setup>

import ToastNotification from "@/components/ToastNotification.vue";
</script>

<template>
	<div class="container-fluid g-sm-0">
        <div class="row g-sm-0">
            <router-view />
        </div>
    </div>

    <ToastNotification />
</template>

<style scoped>

</style>
