import { getApiUsers } from "@/helpers/getAllUsers";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useUserStore = defineStore('users', () =>{

    const users = ref();

    const getAllUsers = async () =>{
        const {data} = await getApiUsers()
        console.log(data.results);
        users.value = data.results;
        //users.value.push(data.results)
    }

    return {getAllUsers, users}

})