<template>
    <h3>Vista en Tabla</h3>
    <div class="container">
        <table>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Edad</td>
                    <td>Posición</td>
                </tr>
            </thead>
            <tbody>
                <UserRow v-for="row in props.content" :key="row" :content="row" />
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import UserRow from '@/components/UserRow.vue';
    import { defineProps } from 'vue';

    const props = defineProps(['content'])
</script>