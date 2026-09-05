<script setup>
import {useFetchCompanies} from "@/stores/company/getCompanies.js";
import {computed} from "vue";

useFetchCompanies().companiesGet()
const companies = computed(() => useFetchCompanies().state.companies)
</script>

<template>
    <!-- Table -->
    <div class="table-responsive mt-3 shadow rounded-top">
        <table class="table mb-0 align-middle font-poppins fs-13">
            <thead class="p-3">
            <tr>
                <th scope="col" class="ps-3 ps-md-4 py-2 py-sm-3 align-middle text-break">Kom<wbr>pa<wbr>ni<wbr>ya<wbr>lar</th>
                <th scope="col" class="py-2 py-sm-3 align-middle text-break">Email</th>
                <th scope="col" class="py-2 py-sm-3 align-middle text-break">Man<wbr>zi<wbr>li</th>
                <th scope="col" class="py-2 py-sm-3 align-middle text-break">So'ng<wbr>gi faol<wbr>lik</th>
                <th scope="col" class="pe-3 pe-md-4 py-2 py-sm-3 action-col"></th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="company in companies"
                v-bind:key="company.id"
            >
                <td class="ps-3 ps-md-4 py-2 py-sm-3 w-23">
                    <img
                        class="rounded-circle me-3 img"
                        v-bind:src="'http://localhost:8505' + company.image.contentUrl"
                        alt=""
                        width="24"
                        height="24"
                    >
                    <span class="fw-medium fs-15 text-p-muted text-break">{{ company.name }}</span>
                </td>
                <td class="py-2 py-sm-3 text-break">{{ company.email }}</td>
                <td class="py-2 py-sm-3 text-break">{{ company.address }}</td>
                <td class="py-2 py-sm-3 text-break">{{ company.createdAt }}</td>
                <td class="pe-3 pe-md-4 py-2 py-sm-3">
                    <div class="d-flex justify-content-evenly">
                        <button type="button" class="img-btn" data-bs-target="#modalChange" data-bs-toggle="modal">
                            <img src="../../assets/images/edit.svg" alt="edit">
                        </button>
                        <button type="button" class="img-btn" data-bs-target="#modalDelete" data-bs-toggle="modal">
                            <img src="../../assets/images/delete.svg" alt="delete">
                        </button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
/* Table - start */
@media (min-width: 650px) {
    .action-col {
        width: 120px;
        min-width: 120px;
    }
}

table {
    table-layout: fixed;
    width: 100%;
}

th {
    font-weight: 500;
    opacity: 0.5;
    color: #334d6e;
}

td {
    font-weight: 400;
    color: #707683;
}

.img {
    object-fit: contain;
}

.img-btn {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    transition: transform 0.1s ease;
}

.img-btn:active {
    transform: scale(0.92);
    filter: brightness(0.8);
}
/* Table - end */

</style>