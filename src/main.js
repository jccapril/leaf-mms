import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App.vue'
import router from "./router";
// 使用ElementUI 
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
