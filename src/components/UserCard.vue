<template>
    <div class="card">
        <h3>{{ props.content.name }}</h3>
        <p>{{ props.content.age }}</p>
        <p>{{ props.content.position }}</p>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['content'])
</script>

<style scoped>
    .card {
        border-radius: 10px;
        background-color: aquamarine;
        padding: 10px;
        display: flex;
        flex-direction: column;
        width: 350px;
        margin: 10px;
    }
</style>