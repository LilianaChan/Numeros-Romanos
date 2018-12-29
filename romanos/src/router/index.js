import Vue from 'vue'
import Router from 'vue-router'
import NumeroRomano from '@/components/NumeroRomano'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NumeroRomano',
      component: NumeroRomano
    },
  ]
})
