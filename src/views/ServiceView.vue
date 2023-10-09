<template>
    <div class="home">
      <MainLayout>
        <template v-slot:main>
            <p>Este es el Service</p>
        </template>
        <template v-slot:aux>
            <p>Servicio 1</p>
        </template>
      </MainLayout>
    </div>
  </template>
  
  <script setup>
    import MainLayout from '@/layouts/MainLayout.vue'
  </script>
  