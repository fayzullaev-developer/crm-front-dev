<script setup>

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="d-flex flex-column p-3 bg-light" style="width: 256px;">
                Kadirov Inc
                <hr>
                <div class="d-flex dropdown">
                    <div>
                        <img class="rounded-circle me-3" src="@/assets/ameliya.png" alt="" width="46" height="46">
                    </div>
                    <div class="d-flex flex-wrap">
                        <div>
                            <span class="name">Ameliya</span>
                        </div>
                        <div>
                            <span class="d-flex align-items-start email">ameliya.cer@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
@import url('https://fonts.googleapis.com');
/*
    npm install @fontsource/open-sans
    npm install @fontsource/poppins
*/

.name {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
}

.email {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 11px;
    color: #707683;
}
</style>
