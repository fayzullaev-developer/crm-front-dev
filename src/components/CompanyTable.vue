<script setup>

</script>

<template>
    <!-- Table -->
    <div class="table-responsive mt-3 shadow rounded-top">
        <table class="table mb-0 align-middle font-poppins fs-13">
            <thead class="p-3">
            <tr>
                <th scope="col" class="ps-3 ps-md-4 py-2 py-sm-3 align-middle text-break">Kom<wbr>pa<wbr>ni<wbr>ya<wbr>lar</th>
                <th scope="col" class="py-2 py-sm-3 align-middle text-break">Email</th>
                <th scope="col" class="py-2 py-sm-3 align-middle text-break">Manzili</th>
                <th scope="col" class="py-2 py-sm-3 align-middle text-break">So'nggi faollik</th>
                <th scope="col" class="pe-3 pe-md-4 py-2 py-sm-3 action-col"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="ps-3 ps-md-4 py-2 py-sm-3 w-23">
                    <img class="rounded-circle me-3" src="@/assets/images/lindsey_stroud.png" alt="" width="24" height="24">
                    <span class="fw-medium fs-15 text-p-muted text-break">Lindsey Stroud</span>
                </td>
                <td class="py-2 py-sm-3 text-break">lindsey.stroud@gmail.com</td>
                <td class="py-2 py-sm-3">Toshkent sh.</td>
                <td class="py-2 py-sm-3 text-break">5 minut oldin</td>
                <td class="pe-3 pe-md-4 py-2 py-sm-3">
                    <div class="d-flex justify-content-evenly">
                        <button type="button" class="img-btn" data-bs-target="#modalChange" data-bs-toggle="modal">
                            <img src="@/assets/images/edit.svg" alt="edit">
                        </button>
                        <button type="button" class="img-btn" data-bs-target="#modalDelete" data-bs-toggle="modal">
                            <img src="@/assets/images/delete.svg" alt="delete">
                        </button>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="ps-3 ps-md-4 py-2 py-sm-3">
                    <img class="rounded-circle me-3" src="@/assets/images/nicci_troiani.png" alt="" width="24" height="24">
                    <span class="fw-medium fs-15 text-p-muted">Nicci Troiani</span>
                </td>
                <td class="py-2 py-sm-3 text-break">nicci.troiani@gmail.com</td>
                <td class="py-2 py-sm-3">Samarqand sh.</td>
                <td class="py-2 py-sm-3">14 minut oldin</td>
                <td class="pe-3 pe-md-4 py-2 py-sm-3">
                    <div class="d-flex justify-content-evenly">
                        <img src="@/assets/images/edit.svg" alt="edit">
                        <img src="@/assets/images/delete.svg" alt="delete">
                    </div>
                </td>
            </tr>
            <tr>
                <td class="ps-3 ps-md-4 py-2 py-sm-3">
                    <img class="rounded-circle me-3" src="@/assets/images/george_fields.png" alt="" width="24" height="24">
                    <span class="fw-medium fs-15 text-p-muted">George Fields</span>
                </td>
                <td class="py-2 py-sm-3 text-break">george.fields@gmail.com</td>
                <td class="py-2 py-sm-3">Nukus sh.</td>
                <td class="py-2 py-sm-3">6 minut oldin</td>
                <td class="pe-3 pe-md-4 py-2 py-sm-3">
                    <div class="d-flex justify-content-evenly">
                        <img src="@/assets/images/edit.svg" alt="edit">
                        <img src="@/assets/images/delete.svg" alt="delete">
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