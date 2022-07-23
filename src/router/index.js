import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            name: 'home',
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                showFooter: false
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                showFooter: false
            }
        },
        {
            path: '/search:keyWord',
            component: Search,
            meta: {
                showFooter: true
            },
            name: 'search'
        },
        // 重定向
        // {
        //     path: '*',
        //     redirect: '/home'
        // }
    ]
})
// 保存原型push方法
let orignPush = VueRouter.prototype.push;
let orignReplace = VueRouter.prototype.replace;

// 修改VueRouter的push
// 第一个参数告诉原来的push方法往哪里跳（传递了那些参数）
// resolve reject参数传递了成功失败参数
VueRouter.prototype.push = function(location, resolve, reject){
    if(resolve && reject) {
        orignPush.call(this, location, resolve, reject)
    }
    else {
        // this为VueRouter，call将上下文修改为了Vuerouter
        orignPush.call(this, location, ()=>{}, ()=>{})
    }
}

VueRouter.prototype.replace = function(location, resolve, reject){
    if(resolve && reject) {
        orignReplace.call(this, location, resolve, reject)
    }
    else {
        orignReplace.call(this, location, ()=>{}, ()=>{})
    }
}