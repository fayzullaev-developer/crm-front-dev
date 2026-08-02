<script setup>
const emit = defineEmits(['saved'])

const handleSave = () => {
    emit('saved');
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
                    <form action="">
                        <div class="mb-3">
                            <label for="name" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Ismi<span class="text-p-blue">*</span>
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
                        <div class="mb-3 company">
                            <label for="workplace" class="col-form-label pt-1 font-poppins fw-normal fs-14">
                                Ishlash joyi<span class="text-p-blue">*</span>
                            </label>
                            <select name="workplace" id="workplace" class="form-select rounded-2 font-poppins fw-normal fs-14">
                                <option selected value="company-one">Kompaniya 1</option>
                                <option value="company-two">Kompaniya 2</option>
                                <option value="company-three">Kompaniya 3</option>
                                <option value="company-four">Kompaniya 4</option>
                            </select>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="button"
                                    @click="handleSave"
                                    class="btn btn-primary rounded-1 btn-p btn-modal font-poppins fw-normal fs-13"
                                    data-bs-dismiss="modal">
                                Qo'shish
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