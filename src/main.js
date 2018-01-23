import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import VueResource from 'vue-resource'
import Auth from './packages/auth/Auth.js'

//Botstrap vue
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


require('./assets/css/carousel.css')
require('./assets/css/mystyle.css')

Vue.use(VueResource)
Vue.use(Auth)

Router.beforeEach(
	(to, from, next)=>{
		if(Vue.auth.getToken() !== null){
			Vue.http.headers.common['Authorization'] = 'Bearer '+ Vue.auth.getToken();
		}
		if(to.matched.some(record => record.meta.forVisitors)){
			if(Vue.auth.isAuthenticated()){
				next({
					path: '/feed'
				})
			}else{
				next();
			}			
		} else if(to.matched.some(record => record.meta.forAuth)){
			if( ! Vue.auth.isAuthenticated()){
				next({
					path: '/login'
				})
			}else{
				next();
			}			
		} else{			
			next();
		}
	}
)
new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
