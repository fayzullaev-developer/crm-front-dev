<script setup>
defineProps({
    labelName: {
        type: String,
        required: true
    },
    propsId: {
        required: true
    },
    inputType: {
        default: "text"
    },
    placeHolder: {
        type: String
    }
})

defineEmits(['update:modelValue'])
</script>

<template>
    <div class="mb-3">
        <label
            :for="propsId"
            class="form-label font-poppins"
        >
            {{ labelName }}
        </label>
        <input
            @input="$emit('update:modelValue', $event.target.value)"
            :id="propsId"
            :type="inputType"
            class="form-control"
            required
            :placeholder="placeHolder">
    </div>
</template>

<style scoped>

</style>