import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index';
import Preferred from '@/components/Preferred';
import Order from '@/components/order'
import My from '@/components/my'

Vue.use(Router)

let routerArr = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/Preferred',
        name: 'preferred',
        component: Preferred
    },
    {
        path: '/My',
        name: 'my',
        component: My
    },
    {
        path: '/Order',
        name: 'order',
        component: Order
    }
];

export default new Router({
  routes: routerArr,
  mode: 'history'
})
