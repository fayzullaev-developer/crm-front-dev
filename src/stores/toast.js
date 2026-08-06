import {defineStore} from "pinia";
import {ref, shallowRef} from "vue";
import {Toast} from "bootstrap";

export const useToastStore = defineStore(
    'toast', () => {
        const text = ref('')
        const toastInstance = shallowRef(null)

        const initToast = (element) => {
            if (element) {
                toastInstance.value = Toast.getOrCreateInstance(element)
            }
        }

        const show = (message) => {
            text.value = message
            if (toastInstance.value) {
                toastInstance.value.show()
            }
        }

        return {
            text,
            initToast,
            show
        }
    })