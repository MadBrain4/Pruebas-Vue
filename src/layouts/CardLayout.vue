<template>
    <h3>Vista en Carta</h3>
    <div class="container">
        <UserCard v-for="item in props.content" :key="item" :content="item" />
    </div>
</template>

<script setup>
    import UserCard from '@/components/UserCard.vue';
    import { defineProps } from 'vue'

    const props = defineProps(['content'])
</script>

<style scoped>
    .container {
        width: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
    }
</style>