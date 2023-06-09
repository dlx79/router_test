import Vue from 'vue'
import App from './App.vue'
import vuex from 'vuex'
import store from './store'

Vue.config.productionTip = false


new Vue({
  vuex,
  store,
  
  render: h => h(App),
}).$mount('#app')
