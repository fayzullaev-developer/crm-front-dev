<script setup>
import {reactive, ref} from "vue";
import FormButton from "@/components/tags/FormButton.vue";
import {useToastStore} from "@/stores/toast/showToast.js";
import {useFetchCompanies} from "@/stores/company/getCompanies.js";
import {useAddFile} from "@/stores/mediaObject/addFile.js";
import {useCreateClient} from "@/stores/client/createClient.js";

const toastStore = useToastStore()
const isLoading = ref(false);
const formSubmitted = ref(false);
const closeModalBtn = ref(null);

const client = reactive({
    givenName: '',
    email: '',
    company: '',
    image: '',
})

let file = ref();
function selectImage(event) {
    file.value = event.target.files[0];
}

const create = (event) => {
    const form = event.target;
    if (!form.checkValidity()) {
        formSubmitted.value = true;
        return;
    }

    isLoading.value = true

    useAddFile().addFile(file.value)
        .then((res) => {
            // const uploadedFile = res.data[''];
            client.image = res.data['@id'];

            useCreateClient().createClient(client)
                .then(() => {
                    toastStore.showToast("Mijoz muvaffaqiyatli qo'shildi!", 'success')

                    if (closeModalBtn.value) {
                        closeModalBtn.value.click();
                    }

                    // formani tozalash
                    event.target.reset();

                    client.givenName = ''
                    client.email = ''
                    client.company = ''
                    client.image = ''
                    file.value = null
                    formSubmitted.value = false;
                })
                .catch((err) => {
                    const errorMsg = err.response?.data?.detail;
                    toastStore.showToast("Xatolik: " + errorMsg, 'fail')

                    if (closeModalBtn.value) {
                        closeModalBtn.value.click();
                    }

                    console.log(errorMsg)
                })
                .finally(() => {
                    isLoading.value = false
                })
        })
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
                        Mijoz qo'shish
                    </h1>
                </div>
                <div class="modal-body">
                    <form
                        @submit.prevent="create"
                        :class="{ 'was-validated': formSubmitted }"
                        novalidate
                    >
                        <div class="mb-3">
                            <label for="name" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Ismi<span class="text-p-blue">*</span>
                            </label>
                            <input type="text"
                                   v-model.trim="client.givenName"
                                   required
                                   class="form-control rounded-2 font-poppins fw-normal fs-14"
                                   id="name"
                                   placeholder="Name" />
                            <div class="invalid-feedback">
                                Iltimos, ismingizni kiriting.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Email<span class="text-p-blue">*</span>
                            </label>
                            <input type="email"
                                   v-model.trim="client.email"
                                   required
                                   class="form-control rounded-2 font-poppins fw-normal fs-14"
                                   id="email"
                                   placeholder="example@mail.com" />
                            <div class="invalid-feedback">
                                Iltimos, to'g'ri email kiriting.
                            </div>
                        </div>
                        <div class="mb-3 company">
                            <label for="workplace" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Ishlash joyi<span class="text-p-blue">*</span>
                            </label>
                            <select
                                v-model="client.company"
                                required
                                name="workplace"
                                id="workplace"
                                class="form-select rounded-2 font-poppins fw-normal fs-14"
                            >
                                <option value="">Tanlang</option>
                                <option
                                    v-for="company in useFetchCompanies().state.companies"
                                    :key="company.id"
                                    :value="company['@id']"
                                >
                                    {{ company.name }}
                                </option>
                            </select>
                            <div class="invalid-feedback">
                                Iltimos, ishlash joyini tanlang.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Rasmi
                            </label>
                            <input
                                @change="selectImage($event)"
                                class="form-control rounded-2 font-poppins fw-normal fs-14"
                                type="file"
                                id="image"
                            />
                        </div>
                        <div class="d-flex justify-content-center">
                            <FormButton
                                type="submit"
                                :loading="isLoading"
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
select {
    cursor: pointer;
}
</style>