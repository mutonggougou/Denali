import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import routes from './routes/index'
import App from './App.vue'
import "./css/public.css"

Vue.use(VueRouter)
Vue.use(VueAxios,axios )

Vue.config.productionTip = false

new Vue({
   router: new VueRouter ({
    routes
   }),
  render: h => h(App),
}).$mount('#app')
