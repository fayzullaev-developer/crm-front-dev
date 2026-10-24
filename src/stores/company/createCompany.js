import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useCreateCompany = defineStore(
    'createCompany', () => {
        function createCompany(data) {
            return new Promise((resolve, reject) => {
                client.post('companies', data)
                    .then((res) => {
                        console.log('Kompaniya yaratildi')
                        resolve(res);
                    })
                    .catch((err) => {
                        console.log('Kompaniya yaratishda xatolik')
                        reject(err);
                    })
            })
        }

        return { createCompany }
    })