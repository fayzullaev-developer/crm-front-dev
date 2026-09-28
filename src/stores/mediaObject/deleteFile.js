import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useDeleteFile = defineStore(
    'deleteFile', () => {
        function fileDelete(id) {
            return new Promise((resolve, reject) => {
                client.delete('media_objects/' + id)
                    .then((res) => {
                        console.log('Fayl o\'chirildi')
                        resolve(res);
                    })
                    .catch((err) => {
                        console.log('Faylni o\'chirishda xatolik')
                        reject(err);
                    })
            })
        }

        return {fileDelete}
    })