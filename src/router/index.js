import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '../views/AboutPage.vue';
import AnalysisPage from '../views/AnalysisPage.vue';
import ML from '../views/ML.vue';

const routes = [
  {
    path: '/',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/analysis',
    name: 'AnalysisPage',
    component: AnalysisPage
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
