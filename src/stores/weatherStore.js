import { defineStore } from "pinia";
import { ref } from "vue";


export const useWeatherStore = defineStore('weather',() => {
    const temperatura = ref(0)

    const setTemperatura = (tem) => {
        temperatura.value = tem;
    }

    return { temperatura, setTemperatura}
})