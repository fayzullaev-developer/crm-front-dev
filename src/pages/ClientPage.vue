<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
import ControlPanel from "@/components/ControlPanel.vue";
import ClientModalAdd from "@/components/client/ClientModalAdd.vue";
import ClientModalEdit from "@/components/client/ClientModalEdit.vue";
import ClientSearchBar from "@/components/client/ClientSearchBar.vue";
import ClientTable from "@/components/client/ClientTable.vue";
import SelectFilter from "@/components/SelectFilter.vue";
import ModalDelete from "@/components/ModalDelete.vue";
import {useFetchClients} from "@/stores/client/getClients.js";
import {useDeleteClient} from "@/stores/client/deleteClient.js";
import {useToastStore} from "@/stores/toast/showToast.js";

const clientStore = useFetchClients()
const clientDeleteStore = useDeleteClient()
const toastStore = useToastStore()
const route = useRoute()

const selected = ref(null)

function onOpen(id) {
    selected.value = id
}

function onConfirm() {
    if (!selected.value) return

    clientDeleteStore.clientDelete(selected.value)
        .then(() => {
            toastStore.showToast("Mijoz muvaffaqiyatli o\'chirildi!", 'success')

            const companyId = route.query.companyId
            if (companyId === undefined) {
                clientStore.clientsGet()
            } else {
                clientStore.clientsGet('/by-company?companyId=' + companyId)
            }
        })
        .catch((err) => {
            const errorMsg = err.response?.data?.detail;
            toastStore.showToast("Mijozni o\'chirishda xatolik:\n" + errorMsg, 'fail')
        })
        .finally(() => {
            selected.value = null
        })
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
        <ClientTable @open="onOpen" />
    </div>

    <ModalDelete @confirm="onConfirm" />
    <ClientModalAdd />
    <ClientModalEdit />

</template>

<style scoped>

</style>