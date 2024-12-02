<template>
    <h3>Lista de usuarios</h3>
    <div class="content">
        <div class="item" v-for="(item, index) in users" :key="index" @click="goToDetails(index)">
            <div class="img">
                <img :src="item.picture.large" alt="">
            </div>
            <hr>
            <p>Name: {{ item.name.title + ' ' + item.name.first }} </p>
            <p>Lastname: {{ item.name.last }}</p>
            <p>Age: {{ item.dob.age }}</p>
            <p>country: {{ item.location.country }}</p>
            <p>phone: {{ item.cell }}</p>
            <p>email: {{ item.email }}</p>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const users = ref();
const router = useRouter();

const goToDetails = (id) => {
    router.push({ name: 'UsersDetails', params: { id } }); //navegaa user/:id
}

onMounted(async () => {
    await userStore.getAllUsers();
    users.value = userStore.users
})

</script>

<style scoped>
.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.item {
    max-width: 250px;
    border: 2px solid #2222;
    margin: 5px 10px;
    padding: 10px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
}

.img {
    text-align: center;
}

li {
    list-style: none;
}
</style>