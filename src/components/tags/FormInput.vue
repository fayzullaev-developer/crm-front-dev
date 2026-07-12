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
        <label v-bind:for="propsId" class="form-label font-poppins">{{ labelName }}</label>
        <input
            @input="$emit('update:modelValue', $event.target.value)"
            v-bind:id="propsId"
            v-bind:type="inputType"
            class="form-control"
            required
            v-bind:placeholder="placeHolder">
    </div>
</template>

<style scoped>

</style>