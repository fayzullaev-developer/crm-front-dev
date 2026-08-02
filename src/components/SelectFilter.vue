<script setup>

</script>

<template>
    <!-- Company select -->
    <div class="mt-3 font-poppins fs-12 text-p-gray company">
        <label for="company">Kompaniya:&nbsp;</label>
        <select name="company" id="company">
            <option selected>Hammasi</option>
            <option value="">Company1</option>
            <option value="">Company2</option>
        </select>
    </div>
</template>

<style scoped>
.company select {
    border: none;
    color: #109cf1;
    appearance: none;
    background: url("@/assets/images/polygon.svg") 100% / 10% no-repeat;
}
</style>