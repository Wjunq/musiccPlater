import Vue from 'vue'
import App from './App.vue'
// el
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 全局组件
import Header from './components/Header'

// 引人route
import router from './router'

Vue.use(ElementUI)
Vue.component('Header',Header)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  },  
  router
}).$mount('#app')