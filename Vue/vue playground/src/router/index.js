import Vue from 'vue'
import VueRouter from 'vue-router'
import CryptoCurrency from '../views/CryptoCurrency.vue'
import Album from '../views/Album'
import Home from '../views/Home'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/crypto-currency',
        name: 'CryptoCurrency',
        component: CryptoCurrency
    },
    {
        path: '/todo-list',
        name: 'TodoList',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/TodoList.vue')
    },
    {
        path: '/album',
        name: 'Album',
        component: Album
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
