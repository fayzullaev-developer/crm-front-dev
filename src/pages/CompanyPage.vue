<script setup>
import {ref} from "vue";
import {Modal} from "bootstrap"
import Sidebar from "@/components/Sidebar.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import ModalDelete from "@/components/ModalDelete.vue";
import ToastNotification from "@/components/ToastNotification.vue";
import CompanySearchBar from "@/components/company/CompanySearchBar.vue";
import CompanyTable from "@/components/company/CompanyTable.vue";
import CompanyModalAdd from "@/components/company/CompanyModalAdd.vue";
import CompanyModalEdit from "@/components/company/CompanyModalEdit.vue";
import {useFetchCompanies} from "@/stores/company/getCompanies.js";
import {useDeleteCompany} from "@/stores/company/deleteCompany.js";
import {useToastStore} from "@/stores/toast/showToast.js";

const companyStore = useFetchCompanies()
const companyDeleteStore = useDeleteCompany()
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

    companyDeleteStore.companyDelete(deleting.value)
        .then(() => {
            toastStore.showToast("Kompaniya muvaffaqiyatli o'chirildi!", 'success')

            companyStore.companiesGet()
        })
        .catch((err) => {
            const errorMsg = err.response?.data?.detail
            toastStore.showToast("Kompaniyani o'chirishda xatolik:\n" + errorMsg, 'fail')
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
        <ControlPanel  button-text="Kompaniya qo'shish"/>
        <CompanySearchBar />
        <CompanyTable @delete="remove" />
    </div>

    <CompanyModalAdd />
    <CompanyModalEdit />
    <ModalDelete @confirm="onConfirm" />
    <ToastNotification />

</template>

<style scoped>

</style>