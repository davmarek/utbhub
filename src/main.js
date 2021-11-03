import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Jidelnicek from './pages/Jidelnicek.vue';

const router = createRouter({
  history: createWebHistory('/jidelnicek/'),
  routes: [
    {
      path: '/',
      name: 'Jid',
      component: Jidelnicek,
    },
    {
      path: '/:jidelna',
      name: 'Jidelnicekasd',
      component: Jidelnicek,
    },
  ],
});

createApp(App).use(router).mount('#app');
