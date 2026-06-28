<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    loading: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <button type="button" class="btn btn-primary" style="min-width: 25%;">
        <span>{{ text }}</span>
        <span v-if="loading" class="spinner-border spinner-border-sm text-light"></span>
    </button>
</template>

<style scoped>

</style>