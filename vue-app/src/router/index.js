import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Form from '../components/SuperForm'
import Universe from '../components/Universe'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/form',
        name: 'Form',
        component: Form
    },
    {
        path: '/universe:universe',
        name: 'Universe',
        component: Universe
    }
    ]
})