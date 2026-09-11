<script setup>
import {computed, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useFetchCompanies} from "@/stores/company/getCompanies.js";

const companyStore = useFetchCompanies()
companyStore.companiesGet()
const companies = computed(() => companyStore.state.companies)

const route = useRoute();
const router = useRouter();
const selectedCompanyId = ref('');

watch(
    () => route.query.companyId,
    (newId) => {
        if (newId === undefined) {
            selectedCompanyId.value = '';
        } else {
            selectedCompanyId.value = newId;
        }
    },
    { immediate: true }
)

const onCompanyChange = () => {
    router.push({
        path: '/client-page',
        query: selectedCompanyId.value ? {companyId: selectedCompanyId.value} : {}
    });
}
</script>

<template>
    <!-- Company select -->
    <div class="mt-3 font-poppins fs-12 text-p-gray company">
        <label for="company">Kompaniya:&nbsp;</label>
        <select
            name="company"
            id="company"
            v-model="selectedCompanyId"
            @change="onCompanyChange"
        >
            <option value="">Hammasi</option>
            <option
                v-for="company in companies"
                :key="company.id"
                :value="company.id"
            >
                {{company.name}}
            </option>
        </select>
    </div>
</template>

<style scoped>
.company select {
    border: none;
    color: #109cf1;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url("@/assets/images/polygon.svg") no-repeat right 6px center / 10px;
    padding-right: 22px;
}
</style>