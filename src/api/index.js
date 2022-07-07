// 当前模块是对api进行统一管理
import requests from './request'

// 三级联动接口
export const reqCategoryList = () => {
   return requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}