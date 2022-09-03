// 当前模块是对api进行统一管理
import requests from './ajax'
import mockRequests from './mockAjax'

// 三级联动接口
export const reqCategoryList = () => {
   return requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}

export const reqBannerList = () => {
    return mockRequests({
        url: '/banner',
        method: 'get'
    })
}

export const reqFloorList = () => {
    return mockRequests({
        url: '/floor',
        method: 'get'
    })
}

export const reqGetSearchInfo = (params={}) => {
    return requests({
        url: '/list',
        method: 'post',
        data: params
    })
}

export const reqGetDetailInfo = (skuId ={}) => {
    return requests({
        url:`/item/${skuId}`,
        method: 'get'
    })
}

// api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCar = (skuId, skuNum) => {
    return requests({
        url:`/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    })
}

// /api/cart/cartList
export const reqCarList = () => {
    return requests({
        url: '/cart/cartList',
        method: 'get'
    })
}

// /api/cart/deleteCart/{skuId}
export const reqDeleteCarList = (skuId) => {
    return requests({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    })
}

// /api/cart/checkCart/{skuID}/{isChecked}
export const reqCheckCart = (skuID, isChecked) => {
    return requests({
        url: `/cart/checkCart/${skuID}/${isChecked}`,
        method: 'get'
    })
}