import {createRouter,RouteRecordRaw,createWebHistory } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home/index.vue')
    },
    {
      path: '/offlinePackage',
      name: 'OfflinePackage',
      component: () => import('@/views/OfflinePackage/index.vue')
    },
    {
      path: '/onlinePackage',
      name: 'OnlinePackage',
      component: () => import('@/views/OnlinePackage/index.vue')
    },
    {
      path: '/replaceModule',
      name: 'ReplaceModule',
      component: () => import('@/views/ReplaceModule/index.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About/index.vue')
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;