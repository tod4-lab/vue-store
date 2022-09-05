import {reqTradeInfo} from "@/api";

const state = {
    tradeInfo: {}
}
const actions = {
    async getTradeInfo({commit}) {
        let result = await reqTradeInfo()
        if(result.code === 200) {
            commit('GETTRADEINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}
const mutations = {
    GETTRADEINFO(state, tradeInfo) {
        state.tradeInfo = tradeInfo
    }
}
const getters = {
    detailArrayList(state) {
        return state.tradeInfo.detailArrayList
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}