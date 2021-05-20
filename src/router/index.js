import Vue from 'vue'
import VueRouter from "vue-router"
import Home from '../components/Home.vue'
import Login from '../components/auth/Login.vue'
import store from '../store'
import NotFound from '../components/error/NotFound.vue'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
    const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
    store.getters.isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            beforeEnter: requireAuth
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})

export default router