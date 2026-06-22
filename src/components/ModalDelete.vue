<script setup>

</script>

<template>
    <!-- Modal for delete -->
    <div class="modal fade"
         data-bs-backdrop="false"
         id="modalDelete"
         tabindex="-1"
         aria-labelledby="modalDeleteLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-top modal-delete">
            <div class="modal-content rounded-min shadow border-0">
                <div class="modal-body d-flex align-items-center px-4">
                    <span class="mb-0 font-poppins fw-normal fs-15 text-break">
                        Rost&shy;dan ham o'chi&shy;ril&shy;sin&shy;mi?
                    </span>
                    <div class="d-flex buttons ms-2 ms-sm-3 justify-content-end">
                        <button type="button"
                                class="btn bg-p-red text-white rounded-min me-2 me-sm-3
                                        border-0 py-1 font-poppins fw-normal fs-15">
                            Ha
                        </button>
                        <button type="button"
                                class="btn bg-p-green text-white rounded-min border-0 py-1
                                        font-poppins fw-normal fs-15"
                                data-bs-dismiss="modal">
                            Yo'q
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>