import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "@/router/routes";
import store from "@/store";

Vue.use(VueRouter)

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

let router =  new VueRouter({
    routes,
    scrollBehavior(to, from, savePosition) {
        return {y : 0}
    }
})

router.beforeEach(async(to, from, next) => {
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if(token) {
        if(name) {
            if(to.path==='/login') {
                next('/home')
            }
            else {
                next()
            }
        }else {
            try {
                await store.dispatch('getUserInfo')
            }
            catch (err) {
                await store.dispatch('logOut')
            }
            next()
        }
    } else {
        next()
    }
})

export default router

