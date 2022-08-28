import {reqGetSearchInfo} from "@/api";
const actions = {
    async getSearchInfo(context, params) {
        let result = await reqGetSearchInfo(params)
        if(result.code == 200) {
            context.commit('GETSEARCHINFO', result.data);
        }
    }
}
const mutations = {
    GETSEARCHINFO(state, searchInfoList) {
        state.searchInfoList = searchInfoList
    }
}
const getters = {

}
const state = {
    searchInfoList: {}
}

// 将模块仓库内容对外暴露
export default {
    state,
    actions,
    mutations,
    getters
}