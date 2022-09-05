import {reqLogOut, reqPhoneCode, reqUserInfo, reqUserLogin} from "@/api";
import {getToken, setToken} from "@/utils/uuid_token";

const state = {
    code: "",
    userInfo: {},
    token: getToken(),
    nickName: ''
}
const actions = {
    async getPhoneCode(context, phone) {
        // console.log(phone)
        let result = await reqPhoneCode(phone)
        if (result.code === 200) {
            context.commit('GETPHONECODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async getUserInfo(context) {
        let result = await reqUserInfo()
        if(result.code === 200) {
            context.commit('GETUSERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async logOut(context) {
        let result = await reqLogOut()
        if(result.code === 200) {
            context.commit('USERLOGOUT')
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userLogin(context, {phone, password}) {
        let result = await reqUserLogin(phone, password)
        if(result.code === 200) {
            context.commit('USERLOGIN', result.data.token)
            return 'ok'
        }
        return result.message
    }
}
const mutations = {
    GETPHONECODE(state, code) {
        state.code = code
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo || []
        state.nickName = userInfo.nickName
    },
    USERLOGIN(state, token) {
        state.token = token || ""
        setToken(token)
    },
    USERLOGOUT(state) {
        state.userInfo = {}
        state.token = ''
        state.nickName = ''
    }
}

const getters = {
}

export default {
    state,
    mutations,
    actions,
    getters
}