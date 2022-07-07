import {reqCategoryList} from '@/api'

const actions = {
    // 通过api中的函数调用，向服务器发送请求，获取服务器数据
    async CategoryList(context) {
        let result = await reqCategoryList();
        if(result.code === 200) {
            context.commit('CATEGORYLIST', result.data)
        }
    }
}

const mutations = {
    CATEGORYLIST(state, CateGoryList) {
        state.CateGoryList = CateGoryList;
    }
}

const getters = {

}

const state = {
    CateGoryList: [],
}

// 将模块仓库内容对外暴露
export default {
    state,
    actions,
    mutations,
    getters
}