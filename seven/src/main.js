import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import store from './store/store.js'
import reset from './css/reset.css'
import home from './views/home.vue'
import mold from './views/mold.vue'
import searchPage from './views/searchPage.vue'
import goods_detail from './views/goods_detail.vue'
import shop_car from './views/shop_car.vue'
import me from './views/me.vue'
import translate from './views/child/translate.vue'
import balance from './views/child/balance.vue'
import address from './views/child/address.vue'
import addAddress from './views/child/add.vue'



Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios


const routes=[
	{
		path:'/',
		redirect:'/home'
	},
	{
		name:'home',
		path:'/home',
		component:home
	},
	{
		name:'mold',
		path:'/mold',
		component:mold
	},
	{
		name:'searchPage',
		path:'/searchPage',
		component:searchPage
	},
	{
		name:'goods_detail',
		path:'/goods_detail',
		component:goods_detail
	},
	{
		name:'shop_car',
		path:'/shop_car',
		component:shop_car
	},
	{
		name:'me',
		path:'/me',
		component:me
	},
	{
		name:'translate',
		path:'/translate',
		component:translate
	},
	{
		name:'balance',
		path:'/balance',
		component:balance
	},
	{
		name:'address',
		path:'/address',
		component:address
	},
	{
		name:'addAddress',
		path:'/addAddress/:index',
		component:addAddress
	}
]

let router=new VueRouter({
	routes
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
