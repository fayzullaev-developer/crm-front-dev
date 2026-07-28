<script setup>
import Sidebar from "@/components/Sidebar.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import ClientModalAdd from "@/components/client/ClientModalAdd.vue";
import ClientModalEdit from "@/components/client/ClientModalEdit.vue";
import ModalDelete from "@/components/ModalDelete.vue";
import ToastNotification from "@/components/ToastNotification.vue";
import CompanySearchBar from "@/components/company/CompanySearchBar.vue";
import CompanyTable from "@/components/company/CompanyTable.vue";
import CompanyModalAdd from "@/components/company/CompanyModalAdd.vue";
import CompanyModalEdit from "@/components/company/CompanyModalEdit.vue";

</script>

<template>
    <div class="col-sm-auto">
        <Sidebar />
    </div>

    <div class="col mx-sm-4 mx-auto">
        <ControlPanel  button-text="Kompaniya qo'shish"/>
        <CompanySearchBar />
        <CompanyTable />
    </div>

    <CompanyModalAdd />
    <CompanyModalEdit />
    <ModalDelete />
    <ToastNotification />

</template>

<style scoped>

</style>