import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from "@/components/admin/layouts/AppLayout.vue";
import Dashboard from "@/components/admin/pages/Dashboard.vue";
import ProductPage from "@/components/user/pages/ProductPage.vue";
import DashboardPage from "@/components/user/pages/DashboardPage.vue";
import ShoppingCartPage from "@/components/user/pages/ShoppingCartPage.vue";
import ProductDetailPage from "@/components/user/pages/ProductDetailPage.vue";
import NotFoundPage from "@/components/user/pages/NotFoundPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/admin',
            name: 'admin',
            component: AppLayout,
            children:[
                {
                    path: 'dashboard',
                    name: 'admin.dashboard',
                    component: Dashboard
                }
            ]
        },
        {
            path: '/',
            name: 'home',
            component: DashboardPage,

        },
        {
            path: '/products',
            name: 'user.products',
            component: ProductPage
        },
        {
            path: '/product/:id',
            name: 'user.productDetail',
            component: ProductDetailPage
        },
        {
            path: '/shopping-cart',
            name: 'user.shopping-cart',
            component: ShoppingCartPage
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundPage
        }

    ]
})

export default router
