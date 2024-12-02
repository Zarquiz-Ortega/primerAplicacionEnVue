import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/contador/components/Contador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'lista-de-tareas',
      component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue'),
    },
    {
      path: '/registrar',
      name: 'Registrar',
      component: () => import('../modules/registro/views/RegistrarView.vue'),
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('../modules/users/components/UsersViews.vue'),
    },
    {
      path: '/users/:id', //:id es un parametro dinamico
      name: 'UsersDetails',
      component: () => import('../modules/users/components/UsersDetails.vue'),
      props: true, //esto pasa automaticamente el parametro id como prop
    },
  ],
})

export default router
