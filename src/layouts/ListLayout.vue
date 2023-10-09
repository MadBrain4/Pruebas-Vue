<template>
    <h3>Vista en Lista</h3>
    <div class="contai">
        <UserList v-for="list in props.content" :key="list" :content="list" />
    </div>
</template>

<script setup>
    import UserList from '@/components/UserList.vue';
    import { defineProps } from 'vue'

    const props = defineProps(['content'])
</script>