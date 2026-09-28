import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useDeleteClient = defineStore(
    'deleteClient', () => {
        function clientDelete(id) {
            return new Promise((resolve, reject) => {
                client.delete('clients/' + id)
                    .then((res) => {
                        console.log('Mijoz o\'chirildi')
                        resolve(res);
                    })
                    .catch((err) => {
                        console.log('Mijozni o\'chirishda xatolik')
                        reject(err);
                    })
            })
        }

        return {clientDelete}
    })