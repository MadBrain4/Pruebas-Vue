<template>
    <button @click="show = !show ">Mostrar / Ocultar</button>
    <slot v-if="show"></slot>
</template>

<script setup>
    import { ref } from 'vue'

    const show = ref(false)
</script>