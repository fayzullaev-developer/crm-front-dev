<script setup>
import {useToastStore} from "@/stores/toast.js";
import {onMounted, ref} from "vue";

const toastStore = useToastStore()
const toastElement = ref(null)

onMounted(() => {
    toastStore.initToast(toastElement.value)
})

</script>

<template>
    <!-- Toast -->
    <div class="toast-container position-fixed start-50 toast-position translate-middle-x">
        <div ref="toastElement"
             class="toast text-white bg-p-green rounded-1 border-0"
             role="alert"
             aria-live="assertive"
             aria-atomic="true">
            <div class="toast-body">
                <img src="@/assets/images/check.svg" class="rounded me-2" alt="">
                {{ toastStore.text }}
            </div>
        </div>
    </div>

</template>

<style scoped>
/* toast style - start */
.toast {
    min-width: 312px;
    --bs-toast-max-width: 400px !important;
    box-shadow: none;
}

.toast-position {
    top: 50px !important;
}
/* toast style - end */

</style>