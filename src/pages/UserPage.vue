<script setup>
import Sidebar from "@/components/Sidebar.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import ModalAdd from "@/components/ModalAdd.vue";
import ModalEdit from "@/components/ModalEdit.vue";
import ModalDelete from "@/components/ModalDelete.vue";
import ToastNotification from "@/components/ToastNotification.vue";
import UserSearchBar from "@/components/UserSearchBar.vue";
import UserTable from "@/components/UserTable.vue";

</script>

<template>
    <div class="col-sm-auto">
        <Sidebar />
    </div>

    <div class="col mx-sm-4 mx-auto">
        <ControlPanel />
        <UserSearchBar />
        <UserTable />
    </div>

    <ModalAdd />
    <ModalEdit />
    <ModalDelete />
    <ToastNotification />

</template>

<style scoped>

</style>