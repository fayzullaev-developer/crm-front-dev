<script setup>

</script>

<template>
    <!-- Modal for edit -->
    <div class="modal fade bg-white bg-opacity-75"
         id="modalChange"
         tabindex="-1"
         aria-labelledby="modalChangeLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-width mx-auto">
            <div class="modal-content rounded-0 shadow border-0">
                <div class="modal-header justify-content-center">
                    <h1 class="modal-title font-poppins fw-semibold fs-13" id="modalChangeLabel">
                        O'zgartirish
                    </h1>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="mb-3">
                            <label for="name" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Ism<span class="text-p-blue">*</span>
                            </label>
                            <input type="text"
                                   class="form-control rounded-2 font-poppins fw-normal fs-14"
                                   id="name"
                                   placeholder="Name" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Email<span class="text-p-blue">*</span>
                            </label>
                            <input type="text"
                                   class="form-control rounded-2 font-poppins fw-normal fs-14"
                                   id="email"
                                   placeholder="example@mail.com" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Parol<span class="text-p-blue">*</span>
                            </label>
                            <input type="text"
                                   class="form-control rounded-2 font-poppins fw-normal fs-14"
                                   id="password"
                                   placeholder="Parol" />
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="button"
                                    @click="showToast"
                                    class="btn btn-primary rounded-1 btn-modal font-poppins fw-normal fs-13"
                                    data-bs-dismiss="modal">
                                O'zgartirish
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