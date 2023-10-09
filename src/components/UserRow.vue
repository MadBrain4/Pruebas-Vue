<template>
    <tr>
        <td>{{ props.content.name }}</td>
        <td>{{ props.content.age }}</td>
        <td>{{ props.content.position }}</td>
    </tr>
</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['content'])
</script>