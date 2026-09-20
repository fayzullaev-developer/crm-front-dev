import {defineStore} from "pinia";
import {reactive} from "vue";

export const useToastStore = defineStore(
    'toast', () => {
        const state = reactive({
            type: '',
            message: '',
            trigger: null
        })

        function showToast(message, toastType) {
            state.message = message
            state.type = toastType
            state.trigger = Date.now()
        }

        return {
            state,
            showToast
        }
    })