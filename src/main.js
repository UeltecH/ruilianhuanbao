import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios;
Vue.config.productionTip = false

// 引入lib-flexible
// import  'lib-flexible'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})
