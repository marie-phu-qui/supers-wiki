//  test vue-router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Supers-List from './Supers-List.vue'

Vue.use(VueRouter)

const Home = { template: '<div>home</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/:universe', component: Supers-List }
  ]
})

new Vue({
  router,
  template: `
    <div id="app">
      <h1>Data Fetching</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/:universe">/:universe</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')