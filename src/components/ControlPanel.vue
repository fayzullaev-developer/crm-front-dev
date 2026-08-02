<script setup>
import FormButton from "@/components/tags/FormButton.vue";

defineProps({
    buttonText: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <!-- Add -->
    <div class="d-flex bg-white justify-content-end">
        <nav class="navbar navbar-expand-lg justify-content-between ms-2">
            <button class="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavigation"
                    aria-controls="offcanvasNavigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
        <FormButton
            v-bind:text="buttonText"
            class="ms-auto m-2 btn-add font-poppins fw-medium fs-13"
            data-bs-toggle="modal"
            data-bs-target="#modalAdd"
        />
    </div>

</template>

<style scoped>
.btn-add {
    height: 42px;
    margin-top: 9px !important;
    margin-right: 12px !important;
    margin-bottom: 9px !important;
}

</style>