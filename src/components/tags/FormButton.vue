<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    loading: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'button'
    }
})
</script>

<template>
    <button :type="type" class="btn btn-primary btn-p">
        <span>{{ text }}</span>
        <span v-if="loading" class="spinner-border spinner-border-sm text-light"></span>
    </button>
</template>

<style scoped>

</style>