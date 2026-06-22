<script setup>
// toast'ni ishga tushirish
function showToast() {
    const element = document.getElementById('liveToast');
    const toast = window.bootstrap.Toast.getOrCreateInstance(element);
    toast.show();
}

</script>

<template>
    <!-- Toast -->
    <div class="toast-container position-fixed start-50 toast-position translate-middle-x">
        <div id="liveToast"
             class="toast text-white bg-p-green rounded-1 border-0"
             role="alert"
             aria-live="assertive"
             aria-atomic="true">
            <div class="toast-body">
                <img src="@/assets/images/check.svg" class="rounded me-2" alt="">
                Ma'lumotlar muvaffaqiyatli qo'shildi
            </div>
        </div>
    </div>

</template>

<style scoped>
/* toast style - start */
.toast {
    width: 312px;
    box-shadow: none;
}

.toast-position {
    top: 50px !important;
}
/* toast style - end */

</style>