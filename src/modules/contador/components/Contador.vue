<template>
    <div>
        <h2>Hola soy un contador</h2>
        <p class="contador">{{ counter }}</p>
        <button class="btn" @click="addCounter(5)">+5</button>
        <button class="btn" @click="addCounter(1)">+1</button>
        <button class="btn" @click="reset">Reset</button>
        <button class="btn" @click="restCounter(1)">-1</button>
        <button class="btn" @click="restCounter(5)">-5</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0)

const reset = () => counter.value = 0

const addCounter = (add) => {
    counter.value += add
}
const restCounter = (rest) => {
    if (counter.value > 0  && counter.value >= rest) {
        counter.value -= rest
    }
}

</script>

<style>
    .contador{
        font-size: 1.5rem;
        color: red;
    }
    .btn{
        border: 1px solid #37373727;
        background-color: #f3f2f2;
        padding: 10px;
        margin: 10px 5px;
        border-radius: 10px;
        font-weight: bold;
    }

    .btn:hover{
        background-color: #ffffffdf;
        scale: 1.1;
    }
</style>