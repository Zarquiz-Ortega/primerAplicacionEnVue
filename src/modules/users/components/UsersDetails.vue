<template>
    <div>
        <h1>User Details</h1>
        <div v-if="user">
            <img :src="user.picture.large" alt="User Picture" />
            <p><strong>Name:</strong> {{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</p>
            <p><strong>Age:</strong> {{ user.dob.age }}</p>
            <p><strong>Country:</strong> {{ user.location.country }}</p>
            <p><strong>Phone:</strong> {{ user.cell }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
        </div>
        <p v-else>
            No se encontro el usuario 
        </p>
        <router-link to="/users">Back to Users</router-link>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRoute } from 'vue-router';

const route = useRoute();
const userStore = useUserStore();

// Obtén el usuario basado en el parámetro de la ruta
const user = computed(() => userStore.users?.[route.params.id]);
</script>

<style scoped>

</style>