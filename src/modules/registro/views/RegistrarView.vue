<template>
    <div>
        <h2>Formulario de registro</h2>
        <div>
            <Form :validation-schema="schema" @submit="onSubmit">
                <div class="form">
                    <label>
                        Nombre:
                        <Field v-model="name" name="name" type="text" placeholder="Ingrese su nombre"/>
                        <ErrorMessage name="name"></ErrorMessage>
                    </label>
                </div>
                <div class="form">
                    <label>
                        Correro:
                        <Field v-model="email" name="email" type="email" placeholder="Ingrese su email" />
                        <ErrorMessage name="email"></ErrorMessage>
                    </label>
                </div>
                <div class="form">
                    <button type="submit">Registrar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema';
import { ref } from 'vue';

// Store registrar 
import { useRegistrarStore } from '../stores/registrarStore';

const   registrarStore = useRegistrarStore()

const name = ref('');
const email = ref('');

const onSubmit = () =>{
    registrarStore.guardarRegistro(name.value, email.value)
}

</script>

<style scoped>
.form{
    margin-bottom: 10px;
}
</style>