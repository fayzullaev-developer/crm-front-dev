<script setup>
import {useToastStore} from "@/stores/toast/showToast.js";
import {reactive, ref} from "vue";
import FormButton from "@/components/tags/FormButton.vue";
import {useAddFile} from "@/stores/mediaObject/addFile.js";
import {useDeleteFile} from "@/stores/mediaObject/deleteFile.js";
import {useCreateCompany} from "@/stores/company/createCompany.js";
import {useFetchCompanies} from "@/stores/company/getCompanies.js";

const toastStore = useToastStore()
const companyStore = useFetchCompanies()
const deleteFileStore = useDeleteFile()

const isLoading = ref(false)
const formSubmitted = ref(false)
const closeModalBtn = ref(null)
const file = ref(null)
const company = reactive({
    name: '',
    email: '',
    address: '',
    image: null
})

function selectImage(event) {
    file.value = event.target.files[0];
}

function createCompany(form) {
    useCreateCompany().createCompany(company)
        .then(() => {
            toastStore.showToast("Kompaniya muvaffaqiyatli yaratildi!", 'success')

            companyStore.companiesGet()

            if (closeModalBtn.value) {
                closeModalBtn.value.click();
            }

            form.reset()
            company.name = ''
            company.email = ''
            company.address = ''
            company.image = null
            formSubmitted.value = false
        })
        .catch((err) => {
            const errorMsg = err.response?.data?.detail;
            toastStore.showToast("Xatolik:\n" + errorMsg, 'fail')

            if (company.image) {
                const fileId = company.image.split('/').pop();

                deleteFileStore.fileDelete(fileId)
                    .catch((err) => {
                        const errorMsg = err.response?.data?.detail
                        console.log("Faylni o'chirishda xatolik: " + errorMsg)
                    })
            }

            if (closeModalBtn.value) {
                closeModalBtn.value.click();
            }
        })
        .finally(() => {
            isLoading.value = false
        })
}

function create(event) {
    const form = event.target;
    if (!form.checkValidity()) {
        formSubmitted.value = true
        return;
    }

    isLoading.value = true

    if (file.value) {
        useAddFile().addFile(file.value)
            .then((res) => {
                company.image = res.data['@id'];
                createCompany(form)
            })
            .catch((err) => {
                const errorMsg = err.response?.data?.detail;
                toastStore.showToast("Rasm yuklanmadi:\n" + errorMsg, 'fail');
                isLoading.value = false
            })
    } else {
        company.image = null
        createCompany(form)
    }
}
</script>

<template>
    <!-- Modal for add -->
    <div class="modal fade bg-white bg-opacity-75"
         id="modalAdd"
         tabindex="-1"
         aria-labelledby="staticBackdropLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-width mx-auto">
            <div class="modal-content rounded-0 shadow border-0">
                <div class="modal-header justify-content-center">
                    <h1 class="modal-title font-poppins fw-semibold fs-13" id="staticBackdropLabel">
                        Kompaniya qo'shish
                    </h1>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="create($event)"
                          :class="{ 'was-validated': formSubmitted }"
                          novalidate>
                        <div class="mb-3">
                            <label for="name" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Nomi<span class="text-p-blue">*</span>
                            </label>
                            <input type="text"
                                   v-model.trim="company.name"
                                   required
                                   class="form-control rounded-2 font-poppins fw-normal fs-14"
                                   id="name"
                                   placeholder="Name" />
                            <div class="invalid-feedback">
                                Iltimos, kompaniya nomini kiriting.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Email<span class="text-p-blue">*</span>
                            </label>
                            <input type="email"
                                   v-model.trim="company.email"
                                   required
                                   class="form-control rounded-2 font-poppins fw-normal fs-14"
                                   id="email"
                                   placeholder="example@mail.com" />
                            <div class="invalid-feedback">
                                Iltimos, to'g'ri email kiriting.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="address" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Manzili<span class="text-p-blue">*</span>
                            </label>
                            <input type="text"
                                   v-model.trim="company.address"
                                   required
                                   class="form-control rounded-2 font-poppins fw-normal fs-14"
                                   id="address"
                                   placeholder="Address" />
                            <div class="invalid-feedback">
                                Iltimos, manzilni kiriting.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Rasm (ixtiyoriy)
                            </label>
                            <input @change="selectImage($event)"
                                   class="form-control rounded-2 font-poppins fw-normal fs-14"
                                   type="file"
                                   id="image" />
                        </div>
                        <div class="d-flex justify-content-center">
                            <FormButton
                                type="submit"
                                :loading = isLoading
                                text="Qo'shish"
                                class="rounded-1 btn-modal font-poppins fw-normal fs-13"
                            />
                            <button
                                type="button"
                                ref="closeModalBtn"
                                data-bs-dismiss="modal"
                                class="d-none">
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>