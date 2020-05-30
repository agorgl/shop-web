import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Customers from './components/Customers.vue'
import Notifications from './components/Notifications.vue'
import Settings from './components/Settings.vue'
import 'fomantic-ui-css/semantic.min.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
