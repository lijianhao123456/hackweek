import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vuetify from 'vuetify'
// import vuetify from './plugins/vuetify';
import './plugins/element.js'
import 'vant/lib/index.css';
import 'vant/lib/index.less';
import './assets/styles/reset.css'


Vue.config.productionTip = false
// Vue.use(Vuetify)

new Vue({
  router,
  store,
  // vuetify,
  render: h => h(App)
}).$mount('#app')
