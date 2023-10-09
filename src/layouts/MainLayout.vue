<template>
    <div class="container">
        <div class="navbar">
            <MenuNavbar />
        </div>
        <div class="main-content-container">
            <MenuSidebar />
        </div>
        <div class="main-content">
            <slot name="main"></slot>
        </div>
        <div class="aux-content">
            <slot name="aux"></slot>
        </div>
    </div>
</template>

<script setup>
    import MenuNavbar from "@/components/MenuNavbar.vue";
    import MenuSidebar from '@/components/MenuSidebar.vue'

</script>

