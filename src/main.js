import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'   // 解决多倍屏下边框1px显示为2(3)px的问题
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)   //  解决移动端点击300ms问题

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
