import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage"
import CatalogPage from "@/pages/CatalogPage"
import ProductPage from "@/pages/ProductPage"
import RegPage from "@/pages/RegPage"
import CartPage from "@/pages/CartPage"
import AuthPage from "@/pages/AuthPage"

Vue.use(VueRouter)

const routes = [{
    path: "/",
    component: MainPage
},
    {
        path: "/catalog",
        component: CatalogPage
    },
    {
        path: "/cart",
        component: CartPage
    },
    {
        path: "/auth",
        component: AuthPage
    },
    {
        path: "/registration",
        component: RegPage
    },
    {
        path: "/product/:id",
        name: "product",
        component: ProductPage,
        props: true
    }

]


export default new VueRouter(
    {
        mode: 'history',
        scrollBehavior() {
            return {x: 0, y: 0,
                behavior: 'smooth'}
        },
        routes
    }
)
