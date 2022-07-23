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