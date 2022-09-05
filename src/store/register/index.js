import {reqUserRegister} from "@/api";

const state = {}
const actions = {
    async userRegister(context, {phone, password, code}) {
        let params = {
            phone: phone,
            password: password,
            code: code
        }
        let result = await reqUserRegister(params)
        if(result.code === 200) {
            return 'ok'
        }else {
            Promise.reject(new Error('fail'))
        }
    }
}
const mutations = {}
const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}