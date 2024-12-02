<template>
    <div>
        <h2>Lista de tareas</h2>
        <label>
            Tarea: 
            <input class="input" type="text" v-model="task" @keyup.enter="addTask">
        </label>
        <ul class="list" >
            <p v-if="listaDeTareas.l">

            </p>
            <li class="item" v-for="(item, index) in listaDeTareas" :key="index">
                {{ item }}
                <button @click="deleteTask(index)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const listaDeTareas = ref(['Limpiar la casa'])
const task = ref('')

const addTask = () =>{
    listaDeTareas.value.push(task.value)
    task.value = ''
}

const deleteTask = (index) => {
    listaDeTareas.value.splice(index,1)
}

</script>
<style>
    .item{
        width: 200px;
        list-style: decimal-leading-zero;
        font-size: 1.2rem;
        border-bottom: 1px solid #7272725c;
    }
    .input{
        width: 200px;
        border: none;
        border-bottom: 2px solid #22222269;
        background-color: #f0f0f051;
    }
</style>