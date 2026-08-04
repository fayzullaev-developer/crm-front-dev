<script setup>
import {useToastStore} from "@/stores/toast.js";

const toastStore = useToastStore()

const handleDelete = () => {
    // api request...

    toastStore.show("Mijoz muvaffaqiyatli o'chirildi!")
}
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
                                @click="handleDelete"
                                data-bs-dismiss="modal"
                                id="btn-yes"
                                class="btn bg-p-red text-white rounded-min me-2 me-sm-3
                                        border-1 py-1 font-poppins fw-normal fs-15">
                            Ha
                        </button>
                        <button type="button"
                                id="btn-no"
                                class="btn bg-p-green text-white rounded-min border-1 py-1
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
.buttons {
    flex: 1;
}

.buttons button {
    min-width: 60px;
    width: clamp(60px, 100%, 94px);
}

#btn-yes:hover,
#btn-yes:focus {
    color: #f7685b !important;
    background-color: white;
}

#btn-no:hover,
#btn-no:focus {
    color: #34d47e !important;
    background-color: white;
}

.buttons > button:hover,
.buttons > button:focus {
    border: 1px solid currentColor !important;
}
</style>