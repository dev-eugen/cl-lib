import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
// import UIView from '../view/UIView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: App,
    },
    {
      path: '/ui',
      name: 'ui',
      component: () => import('../../src/view/ButtonsView.vue'),
    },
  ],
})
