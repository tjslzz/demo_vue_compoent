import Vue from 'vue'
Vue.config.productionTip = false
import App from './Demo.vue'



new Vue({
  render: h => h(App),
}).$mount('#app')
