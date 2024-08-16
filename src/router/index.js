import { createRouter, createWebHistory } from 'vue-router'

import ShopView from '@/views/ShopView.vue'
import SalesView from '@/views/admin/SalesView.vue'
import AdminLayout from '@/views/admin/AdminLayout.vue'
import ProductsView from '@/views/admin/ProductsView.vue'
import NewProductView from '@/views/admin/NewProductView.vue'
import EditProductView from '@/views/admin/EditProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shop',
      component: ShopView
    
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminLayout,
    children:[{
      path:'productos',
      name: 'productos',
      component: ProductsView
    },
    {
      path:'productos/nuevo',
      name: 'nuevo-producto',
      component: NewProductView
    },
    {
      path:'productos/editar/:id',
      name:'editar-producto',
      component: EditProductView
    },
    {
      path: 'ventas',
      name: 'sales',
      component: SalesView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     
    }
  ]
    },
   
  ]
})

export default router
