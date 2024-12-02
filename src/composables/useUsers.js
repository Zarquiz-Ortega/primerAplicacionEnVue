import { useUserStore } from "@/stores/userStore";
import { getApiUsers } from "@/helpers/getAllUsers";

export const useUsers = async () => {

    const users = await getApiUsers();

    const usersStore = useUserStore();

    useUserStore.users = users

}