import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useAddFile = defineStore(
    'add-file', () => {
        function addFile(data) {
            let file = new FormData()
            file.append('file', data)

            return new Promise((resolve, reject) => {
                client.post('media_objects', file)
                    .then((res) => {
                        console.log('fayl yuklandi')
                        resolve(res);
                    })
                    .catch((err) => {
                        console.log('fayl yuklashda xatolik')
                        reject(err);
                    })
            })
        }

        return { addFile }
    })