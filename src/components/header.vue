<template>
    <div class="header">
        {{ mensajeRescibido }}
        <Weather></Weather>
    </div>
</template>
<script setup>
import Weather from './Weather.vue';
import { defineProps, ref, watch } from 'vue';

const props = defineProps(['mensaje']);

const mensajeRescibido = ref(props.mensaje)

watch(() => props.mensaje, (newValue) =>{
    mensajeRescibido.value = newValue
})

</script>
<style scoped>
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        top: 0;
        right: 0;
        left: 0;
        background-color: #333;
        color: white;
    }

    h3{
        margin: 0;
    }
</style>