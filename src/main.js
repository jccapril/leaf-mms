import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App.vue'

// 使用ElementUI 
Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
