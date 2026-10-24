<script setup>
import {useToastStore} from "@/stores/toast/showToast.js";
import {reactive, ref} from "vue";
import FormButton from "@/components/tags/FormButton.vue";
import {useAddFile} from "@/stores/mediaObject/addFile.js";
import {useCreateUser} from "@/stores/user/createUser.js";
import {useFetchUsers} from "@/stores/user/getUsers.js";
import {useDeleteFile} from "@/stores/mediaObject/deleteFile.js";

const toastStore = useToastStore()
const userStore = useFetchUsers()
const deleteFileStore = useDeleteFile()

const isLoading = ref(false)
const formSubmitted = ref(false)
const closeModalBtn = ref(null)
const user = reactive({
    givenName: '',
    email: '',
    password: '',
    image: null,
})

let file = ref()
function selectImage(event) {
    file.value = event.target.files[0];
}

function createUser(form) {
    useCreateUser().createUser(user)
        .then(() => {
            toastStore.showToast("Foydalanuvchi muvaffaqiyatli qo'shildi!", 'success')

            userStore.usersGet()

            if (closeModalBtn.value) {
                closeModalBtn.value.click();
            }

            form.reset()
            user.givenName = ''
            user.email = ''
            user.password = ''
            user.image = null
            formSubmitted.value = false
        })
        .catch((err) => {
            const errorMsg = err.response?.data?.detail;
            toastStore.showToast("Xatolik:\n" + errorMsg, 'fail')

            if (user.image) {
                const fileId = user.image.split('/').pop();

                deleteFileStore.fileDelete(fileId)
                    .catch((err) => {
                        const errorMsg = err.response?.data?.detail;
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
        formSubmitted.value = true;
        return;
    }

    isLoading.value = true

    if (file.value) {
        useAddFile().addFile(file.value)
            .then((res) => {
                user.image = res.data['@id'];
                createUser(form)
            })
            .catch((err) => {
                const errMsg = err.response?.data?.detail;
                toastStore.showToast("Rasm yuklanmadi:\n" + errMsg, 'fail')
            })
            .finally(() => {
                isLoading.value = false;
            })
    } else {
        user.image = null
        createUser(form)
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
                        Foydalanuvchi qo'shish
                    </h1>
                </div>
                <div class="modal-body">
                    <form
                        @submit.prevent="create($event)"
                        :class="{ 'was-validated': formSubmitted }"
                        novalidate
                    >
                        <div class="mb-3">
                            <label for="name" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Ism<span class="text-p-blue">*</span>
                            </label>
                            <input type="text"
                                   v-model.trim="user.givenName"
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
                                   v-model.trim="user.email"
                                   required
                                   class="form-control rounded-2 font-poppins fw-normal fs-14"
                                   id="email"
                                   placeholder="example@mail.com" />
                            <div class="invalid-feedback">
                                Iltimos, to'g'ri e-mail kiriting.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Parol<span class="text-p-blue">*</span>
                            </label>
                            <input type="text"
                                   v-model="user.password"
                                   required
                                   class="form-control rounded-2 font-poppins fw-normal fs-14"
                                   id="password"
                                   placeholder="Parol" />
                            <div class="invalid-feedback">
                                Iltimos, parolni kiriting.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Rasm (ixtiyoriy)
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