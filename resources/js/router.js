import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/Home'
import About from './pages/About'
import Books from './pages/Books'
import AddBook from './components/AddBook'
import EditBook from './components/EditBook'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/books',
        name: 'books',
        component: Books
    },
    {
        path: '/add',
        name: 'add',
        component: AddBook
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: EditBook
    }
]

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes
})

export default router
