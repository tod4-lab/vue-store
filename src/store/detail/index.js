import {reqGetDetailInfo, reqAddOrUpdateShopCar} from "@/api";
import {getUUID} from '@/utils/uuid_token'
const actions = {
    async getDetailInfo(context, skuId) {
        let result = await reqGetDetailInfo(skuId);
        if(result.code === 200) {
            context.commit('GETDETAILINFO', result.data);
        }
    },
    async addOrUpdateShopCar({context}, {skuId, skuNum}) {
        let result = await reqAddOrUpdateShopCar(skuId, skuNum)
        if(result.code === 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('fail'));
        }
    }
}
const state = {
    detailInfo: {},
    uuid_token: getUUID()
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