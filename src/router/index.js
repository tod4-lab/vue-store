import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "@/router/routes";

Vue.use(VueRouter)

export default new VueRouter({
    routes,
    scrollBehavior(to, from, savePosition) {
        return {y : 0}
    }
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