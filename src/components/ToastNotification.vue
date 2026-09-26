<script setup>
import {useToastStore} from "@/stores/toast/showToast.js";
import successIcon from '@/assets/images/icons/check.svg'
import failIcon from '@/assets/images/icons/cross.svg'
import {nextTick, ref, watch} from "vue";
import {Toast} from "bootstrap";

const toastStore = useToastStore()
const toastElement = ref(null)

watch(
    () => toastStore.state.trigger,
    (newTrigger) => {
        if (newTrigger && toastElement.value) {
            nextTick(() => {
                const toastInstance = Toast.getOrCreateInstance(toastElement.value)
                toastInstance.show()
            })
        }
    }
)

</script>

<template>
    <!-- Toast -->
    <div class="toast-container position-fixed start-50 toast-position translate-middle-x">
        <div ref="toastElement"
             class="toast text-white bg-p-green rounded-1 border-0"
             :key="toastStore.state.trigger"
             :class="toastStore.state.type === 'success' ? 'bg-p-green' : 'bg-p-red'"
             role="alert"
             data-bs-delay=3000
             aria-live="assertive"
             aria-atomic="true">
            <div class="toast-body">
                <img :src="toastStore.state.type === 'success' ?
                        successIcon : failIcon"
                     class="rounded me-2"
                     alt="">
                {{ toastStore.state.message }}
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
    white-space: pre-wrap;
}

.toast-position {
    top: 50px !important;
}
/* toast style - end */

</style>