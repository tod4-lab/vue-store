import vue from 'vue'
import vuex from 'vuex'
import home from './home'
import search from './search'
import detail from "./detail";
import shopCar from "@/store/shopCar";
import user from "@/store/user";
import register from "@/store/register";
import trade from "@/store/trade";

vue.use(vuex)

export default new vuex.Store({
    modules: {
        user, home, search, detail, shopCar, register, trade
    }
})

