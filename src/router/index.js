import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Analysis from '../views/Analysis.vue';
import ML from '../views/ML.vue';

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/analysis',
    name: 'Analysis',
    component: Analysis
  },
  {
    path: '/ml',
    name: 'ML',
    component: ML
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
