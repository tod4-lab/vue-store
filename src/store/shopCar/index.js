import {reqCarList, reqCheckCart, reqDeleteCarList} from '@/api'

const state = {
    carList : []
}
const actions = {
    async getCarList(context) {
        let result = await reqCarList()
        if(result.code === 200) {
            // console.log(result.data)
            context.commit('GETCARLIST', result.data)
        }
    },
    async deleteCarInfo(context, skuId) {
        let result = await reqDeleteCarList(skuId)
        if(result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async checkCart(context, {skuId, isChecked}) {
        let result = await reqCheckCart(skuId, isChecked)
        if(result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    deleteAllCheckedCar({dispatch, getters}) {
        let promises = []
        getters.cartInfoList.cartInfoList.forEach(item => {
            if(item.isChecked === 1) {
                let promise = dispatch('deleteCarInfo', item.skuId)
                promises.push(promise)
            }
        })
        return Promise.all(promises)
    },
    changeAllCheckedCar({dispatch, getters}, isChecked) {
        let promises = []
        getters.cartInfoList.cartInfoList.forEach(item => {
            let promise = dispatch('checkCart', {
                skuId: item.skuId,
                isChecked: isChecked
            })
            promises.push(promise)
        })
        return Promise.all(promises)
    }
}
const mutations ={
    GETCARLIST(state, carList) {
        state.carList = carList || []
    }
}
const getters = {
    cartInfoList(state) {
        return state.carList[0] || []
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}