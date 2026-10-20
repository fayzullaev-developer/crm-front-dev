<script setup>
import {ref} from "vue";
import {Modal} from "bootstrap";
import Sidebar from "@/components/Sidebar.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import ModalDelete from "@/components/ModalDelete.vue";
import ToastNotification from "@/components/ToastNotification.vue";
import UserSearchBar from "@/components/user/UserSearchBar.vue";
import UserTable from "@/components/user/UserTable.vue";
import UserModalAdd from "@/components/user/UserModalAdd.vue";
import UserModalEdit from "@/components/user/UserModalEdit.vue";
import {useFetchUsers} from "@/stores/user/getUsers.js";
import {useDeleteUser} from "@/stores/user/deleteUser.js";
import {useToastStore} from "@/stores/toast/showToast.js";

const userStore = useFetchUsers()
const userDeleteStore = useDeleteUser()
const toastStore = useToastStore()
const deleting = ref(null)

function remove(id) {
    deleting.value = id

    const modalDel = document.getElementById('modalDelete')
    if (modalDel) {
        const modalInstance = Modal.getOrCreateInstance(modalDel)
        modalInstance.show()
    }
}

function onConfirm() {
    if (!deleting.value) return

    userDeleteStore.userDelete(deleting.value)
        .then(() => {
            toastStore.showToast("Foydalanuvchi muvaffaqiyatli o'chirildi!", 'success')

            userStore.usersGet()
        })
        .catch((err) => {
            const errorMsg = err.response?.data?.detail
            toastStore.showToast("Foydalanuvchini o'chirishda xatolik:\n" + errorMsg, 'fail')
        })
        .finally(() => {
            deleting.value = null
        })
}
</script>

<template>
    <div class="col-sm-auto sticky-top sidebar-p">
        <Sidebar />
    </div>

    <div class="col mx-sm-4 mx-auto">
        <ControlPanel  button-text="Foydalanuvchi qo'shish"/>
        <UserSearchBar />
        <UserTable @delete="remove" />
    </div>

    <UserModalAdd />
    <UserModalEdit />
    <ModalDelete @confirm="onConfirm" />
    <ToastNotification />

</template>

<style scoped>

</style>