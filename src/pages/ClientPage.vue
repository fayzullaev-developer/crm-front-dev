<script setup>
import Sidebar from "@/components/Sidebar.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import ClientModalAdd from "@/components/client/ClientModalAdd.vue";
import ClientModalEdit from "@/components/client/ClientModalEdit.vue";
import ModalDelete from "@/components/ModalDelete.vue";
import ToastNotification from "@/components/ToastNotification.vue";
import ClientSearchBar from "@/components/client/ClientSearchBar.vue";
import ClientTable from "@/components/client/ClientTable.vue";
import SelectFilter from "@/components/SelectFilter.vue";
import {ref} from "vue";

const toast = ref(null);
const toastText = ref("");

const trigger = (message) => {
    toastText.value = message;
    if (toast.value) {
        toast.value.showToast();
    }
}
</script>

<template>
    <div class="col-sm-auto">
        <Sidebar />
    </div>

    <div class="col mx-sm-4 mx-auto">
        <ControlPanel button-text="Mijoz qo'shish" />
        <SelectFilter />
        <ClientSearchBar />
        <ClientTable />
    </div>

    <ClientModalAdd @saved="trigger('Mijoz muvaffaqiyatli qo\'shildi!')" />
    <ClientModalEdit />
    <ModalDelete />
    <ToastNotification v-bind:text="toastText" ref="toast" />

</template>

<style scoped>

</style>