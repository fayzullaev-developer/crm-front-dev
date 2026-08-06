<script setup>
import Sidebar from "@/components/Sidebar.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import ModalDelete from "@/components/ModalDelete.vue";
import ToastNotification from "@/components/ToastNotification.vue";
import UserSearchBar from "@/components/user/UserSearchBar.vue";
import UserTable from "@/components/user/UserTable.vue";
import UserModalAdd from "@/components/user/UserModalAdd.vue";
import UserModalEdit from "@/components/user/UserModalEdit.vue";

</script>

<template>
    <div class="col-sm-auto">
        <Sidebar />
    </div>

    <div class="col mx-sm-4 mx-auto">
        <ControlPanel  button-text="Foydalanuvchi qo'shish"/>
        <UserSearchBar />
        <UserTable />
    </div>

    <UserModalAdd />
    <UserModalEdit />
    <ModalDelete toast-text="Foydalanuvchi muvaffaqiyatli o'chirildi!" />
    <ToastNotification />

</template>

<style scoped>

</style>