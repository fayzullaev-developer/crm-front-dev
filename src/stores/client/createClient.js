import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useCreateClient = defineStore(
    'createClient', () => {
        function createClient(data) {
            return new Promise((resolve, reject) => {
                client.post('clients', data)
                    .then((res) => {
                        console.log('klient yaratildi')
                        resolve(res);
                    })
                    .catch((err) => {
                        console.log('klient yaratishda xatolik')
                        reject(err);
                    })
            })
        }

        return { createClient }
    })