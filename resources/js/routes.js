import VueRouter from 'vue-router'
import Bookables from './bookables/Bookables'
import Example2 from './components/Example2'

const routes = [
    {
        path: '/',
        component: Bookables,
        name: "home"
    },
    {
        path: '/bookables',
        component: Bookables,
        name: "bookables"
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
