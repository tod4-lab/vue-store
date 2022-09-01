import {reqGetDetailInfo} from "@/api";

const actions = {
    async getDetailInfo(context, skuId) {
        let result = await reqGetDetailInfo(skuId);
        if(result.code === 200) {
            context.commit('GETDETAILINFO', result.data);
        }
    }
}
const state = {
    detailInfo: {}
}
const mutations = {
    GETDETAILINFO(state, detailInfo) {
        state.detailInfo = detailInfo
    }
}
const getters = {
    categoryView(state) {
        return state.detailInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.detailInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.detailInfo.spuSaleAttrList || []
    }
}

export default {
    actions,
    state,
    mutations,
    getters
}