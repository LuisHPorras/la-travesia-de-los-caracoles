import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App.vue'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/main.css'

Vue.use(ElementUI)

Vue.config.productionTip = false
// Vue.prototype.scrollX = window.scrollX
// Vue.prototype.scrollY = window.scrollY

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
