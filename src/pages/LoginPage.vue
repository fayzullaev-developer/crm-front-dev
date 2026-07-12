<script setup>
import FormInput from "@/components/tags/FormInput.vue";
import FormButton from "@/components/tags/FormButton.vue";
import {reactive, ref} from "vue";

let isLoading = ref(false);
let authorization = reactive({
    email: "",
    password: ""
})

function auth() {
    isLoading.value = true;
    console.log('token olindi');
}
</script>

<template>
    <div class="row vh-100 justify-content-center align-items-center">
        <div class="col-12 col-sm-8 col-md-6 col-xl-4">
            <h1 class="text-center font-poppins">Kirish</h1>
            <form>
                <FormInput
                    v-model="authorization.email"
                    props-id="email"
                    label-name="Email"
                    input-type="email"
                    place-holder="name@example.com" />
                <FormInput
                    v-model="authorization.password"
                    props-id="password"
                    label-name="Parol"
                    input-type="password" />

                <div class="text-end">
                    <FormButton @click="auth()"
                                v-bind:loading="isLoading"
                                text="Kirish"
                                class="col-12 col-md-6 col-lg-4" />
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>

<style>
body {
    background-color: #fff;
}
</style>