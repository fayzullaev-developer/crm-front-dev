import {defineStore} from "pinia";
import {ref} from "vue";
import {Toast} from "bootstrap";

export const useToastStore = defineStore(
    'toast', () => {
        const text = ref('')
        const toastInstance = ref(null)

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