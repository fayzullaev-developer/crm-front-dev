<script setup>
import {computed} from "vue";
import {useFetchCompanies} from "@/stores/company/getCompanies.js";

useFetchCompanies().companiesGet()
const companies = computed(() => useFetchCompanies().state.companies)
</script>

<template>
    <!-- Company select -->
    <div class="mt-3 font-poppins fs-12 text-p-gray company">
        <label for="company">Kompaniya:&nbsp;</label>
        <select name="company" id="company">
            <option selected value="all">Hammasi</option>
            <option
                v-for="company in companies"
                v-bind:key="company.id">
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