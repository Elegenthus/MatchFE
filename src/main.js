import Vue from 'vue'
import Index from './componnents/index'
import Result from './componnents/result'
import VueRouter from 'vue-router'
import App from './componnents/app';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Index },
    { path: '/result', component: Result }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})