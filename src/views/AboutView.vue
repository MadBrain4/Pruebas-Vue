<template>
  <div class="home">
    <MainLayout>
      <template v-slot:main>
          Este es el About principal
        </template>
        <template v-slot:aux>
          Este es el About auxiliar
        </template>
    </MainLayout>
  </div>
</template>

<script setup>
  import MainLayout from '@/layouts/MainLayout.vue'
</script>

