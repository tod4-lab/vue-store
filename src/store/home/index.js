import {reqCategoryList} from '@/api'
import {reqBannerList} from "@/api";
import {reqFloorList} from "@/api";

const actions = {
    // 通过api中的函数调用，向服务器发送请求，获取服务器数据
    async CategoryList(context) {
        let result = await reqCategoryList();
        if (result.code === 200) {
            context.commit('CATEGORYLIST', result.data)
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async BannerList(context) {
        let result = await reqBannerList();
        if (result.code === 200) {
            context.commit('BANNERLIST', result.data)
        }
    },
    async FloorList(context) {
        let result = await reqFloorList();
        if (result.code === 200) {
            context.commit('FLOORLIST', result.data)
        }
    }
}

const mutations = {
    CATEGORYLIST(state, CateGoryList) {
        state.CateGoryList = CateGoryList;
    },
    BANNERLIST(state, BannerList) {
        state.BannerList = BannerList
    },
    FLOORLIST(state, FloorList) {
        state.FloorList = FloorList
    }
}

const getters = {}

const state = {
    CateGoryList: [],
    BannerList: [],
    FloorList: []
}

// 将模块仓库内容对外暴露
export default {
    state,
    actions,
    mutations,
    getters
}