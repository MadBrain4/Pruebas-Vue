<template>
  <div class="home">
    <MainLayout>
      <template v-slot:main>
        <p>Este es el Home</p>
      </template>
      <template v-slot:aux>
        <h3>Listado de Usuarios</h3>
        <div>
          <button @click="handleLayout(ListLayout)" >Ver en Lista</button>
          <button @click="handleLayout(TableLayout)" >Ver en Tabla</button>
          <button @click="handleLayout(CardLayout)" >Ver en Tarjetas</button>
        </div>
        <component :is="layout" :content="users" />
      </template>
    </MainLayout>
  </div>
</template>

<script setup>
  import MainLayout from '@/layouts/MainLayout.vue'
  import { ref, defineAsyncComponent } from 'vue'

  const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'))
  const TableLayout = defineAsyncComponent(() => import('@/layouts/TableLayout.vue'))
  const CardLayout = defineAsyncComponent(() => import('@/layouts/CardLayout.vue'))
  
  const layout = ref(ListLayout)

  const handleLayout = cmp => layout.value = cmp
  
  const users = ref([
    {
      name: 'Juanjo',
      age: 65,
      position: 'Fullstack'
    },
    {
      name: 'Jose',
      age: 34,
      position: 'Frontend'
    },
    {
      name: 'Mario',
      age: 27,
      position: 'Frontend'
    },
    {
      name: 'Carlos',
      age: 42,
      position: 'Backend'
    },
    {
      name: 'Marta',
      age: 34,
      position: 'Backend'
    },
    {
      name: 'Nori',
      age: 85,
      position: 'Backend'
    }
  ])
</script>
