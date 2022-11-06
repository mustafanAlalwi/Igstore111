
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import cors from 'cors' 






Vue.config.productionTip = false
Vue.use(axios)
Vue.use(cors)
new Vue({
  el:'#app',
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
