<template >
    <div class="sidebar" >
        <h1>Biembenido</h1>
        <p>Nombre: {{ registrarStore.name }}</p>
        <p>Email: {{ registrarStore.email }}</p>
        <ul>
            <li v-for="(item, index) in menu" :key="index">
                <router-link :to="item.path">
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { menu } from './menu/menu';
// Store registrar
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
const registrarStore = useRegistrarStore();

/*import { ref, watch} from 'vue';

const name = ref(registrarStore.name.value);
const email = ref(registrarStore.email.value);
watch(() => registrarStore.name, (newValue) =>{
    name.value = newValue;
})

watch(() => registrarStore.email, (newValue) =>{
    email.value =newValue;
})*/

</script>

<style >
    .sidebar{
        width: 200px;
        background-color: #f0f0f0;
        padding: 20px;
    }
</style>