import { defineStore } from "pinia"
import { ref } from "vue"

export const useRegistrarStore = defineStore('registrar', () =>{
    const name = ref('');
    const email = ref('');

    const guardarRegistro = (nameFormulario, emailFormulario) => {
        name.value = nameFormulario;
        email.value = emailFormulario

    }
    
    return {name, email, guardarRegistro}
})