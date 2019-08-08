import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HotDogs from './components/HotDogs'
import Add from './components/Add'
import Review from './components/Review'
import Update from './components/Update'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: HotDogs},
    {path: '/add', component: Add},
    {path: '/hotdog/:id', component: Review},
    {path: '/update/:id', component: Update}
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

