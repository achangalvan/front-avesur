import Vue from 'vue'
import VueRouter from 'vue-router'  
import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import Feed from './components/Feed.vue'
import Index from './components/Index/Index.vue'
import Logout from './components/authentication/Logout.vue'


Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: "/",
			component: Index,
			meta:{
				forVisitors: true
			}
		},
		{
			path: "/login",
			component: Login,
			meta:{
				forVisitors: true
			}
		},
		{
			path: "/register",
			component: Register,
			meta:{
				forVisitors: true
			}
		},
		{
			path: "/feed",
			component: Feed,
			meta:{
				forAuth: true
			}
		},
		{
			path: "/Logout",
			component: Logout,
			meta:{
				forAuth: true
			}
		}
	]
})
export default router