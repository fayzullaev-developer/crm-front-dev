import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useDeleteCompany = defineStore(
    'deleteCompany', () => {
        function companyDelete(id) {
            return new Promise((resolve, reject) => {
                client.delete('companies/' + id)
                    .then((res) => {
                        console.log('Kompaniya o\'chirildi')
                        resolve(res);
                    })
                    .catch((err) => {
                        console.log('Kompaniyani o\'chirishda xatolik')
                        reject(err);
                    })
            })
        }

        return {companyDelete}
    })