import '../libs/adapt.js'
import '../css/comm.css'

import Vue from 'vue'
import VueRouter from 'vue-router'

import notelist from '../components/noteList'

Vue.use(VueRouter)

const routes = [
	{path: '/', component: notelist},
	{path: '/notelist', component: notelist}
]

const router = new VueRouter({
	routes
})

const app = new Vue({
	router
}).$mount('#app')