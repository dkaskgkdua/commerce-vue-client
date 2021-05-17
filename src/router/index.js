import Vue from 'vue'
import VueRouter from "vue-router"
import Home from '../components/Home.vue'
import Login from '../components/auth/Login.vue'
// import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        }
    ]
})

export default router