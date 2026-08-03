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

    <ClientModalAdd />
    <ClientModalEdit />
    <ModalDelete />
    <ToastNotification />

</template>

<style scoped>

</style>