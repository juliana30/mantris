import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Contato from '@/components/Contato'
import Principal from '@/components/Principal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Contato',
      name: 'Contato',
      component: Contato
    },
    {
      path: '/Principal',
      name: 'Principal',
      component: Principal
    }
  ]
})
