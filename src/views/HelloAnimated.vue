<template>
    <MainLayout>
        <template v-slot:main>
            <div>
                <h3>Hello Animated</h3>
            </div>
        </template>
        <template v-slot:aux>
            <TransitionGroup name="listNotes" tag="ul" >
                <li v-for="(note, index) in notes" :key="index" >
                    {{ note }}
                    <v-icon @click="deleteNote(index)" name="md-deleteforever" animation="pulse" hover="true" title="Description" />
                </li>
            </TransitionGroup>
            <input v-model="note" type="text" />
            <button @click="saveNote">Save Note</button>
        </template>
    </MainLayout>
</template>

<script setup>
    import MainLayout from '@/layouts/MainLayout.vue';
    import { ref } from 'vue'

    const notes = ref([])
    const note = ref('')

    const saveNote = () => {
        notes.value.push(note.value)
        note.value = ''
    }

    const deleteNote = (index) => {
        notes.value.splice(index, 1)
    }
</script>

<style>
    .listNotes-enter-active, .listNotes-leave-active {
        transition: opacity .5s ease;
    }

    .listNotes-enter-from, .listNotes-leave-to {
        opacity: 0;
    }

    .listNotes-enter-to, .listNotes-leave-from {
        opacity: 1;
    }
</style>