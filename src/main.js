import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/reset.css'
import locale from 'element-ui/lib/locale/lang/en'
import MaskedInput from 'vue-text-mask'

import router from './router'

Vue.use(ElementUI, { locale });
Vue.component('masked-input', MaskedInput);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')