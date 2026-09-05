<script setup>
import Sidebar from "@/components/Sidebar.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import FormButton from "@/components/tags/FormButton.vue";
import {useRouter} from "vue-router";

const router = useRouter();
function logOut() {
    localStorage.removeItem("token");
    router.push("/login");
}
</script>

<template>
    <div class="col-sm-auto">
        <Sidebar />
    </div>

    <div class="col mx-sm-4 mx-auto">
        <ControlPanel button-text="Chiqish" />
        <div class="mt-4">
            <router-link to="/login" custom class="mb-2">
                <FormButton @click="logOut()" text="Chiqish" />
            </router-link>
            <p>Bu yerda sozlamalar joylashadi</p>
        </div>
    </div>

</template>

<style scoped>

</style>