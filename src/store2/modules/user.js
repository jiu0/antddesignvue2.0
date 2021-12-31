import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const getDefaultState = () => {
    return {
        token: getToken(),
        name: "",
        phoneNo: "",
    }
}
const state = getDefaultState()

const mutations = {
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_PHONENO: (state, phoneNo) => {
        state.phoneNo = phoneNo
    },
}

const actions = {
    // 用户登录，获取token，并储存到cookie里面
    login({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            commit('SET_PHONENO', '15518270529')
            resolve()
            // //调用登录接口
            // login().then(response => {
            //     const { data } = response
            //     // 储存到cookie里面
            //     commit('SET_TOKEN', data.token)
            //     setToken(data.token)
            //     resolve()
            // }).catch(error => {
            //     reject(error)
            // })
        })
    },
    //调用获取用户信息的接口
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            //调用获取用户信息接口
            getInfo().then(response => {
                const { data } = response
                if (!data) {
                    reject('Verification failed, please Login again.')
                }
                const { name, phoneNo } = data
                commit('SET_PHONENO', phoneNo)
                commit('SET_NAME', name)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    //用户退出登录
    logout({ commit, state }) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    removeToken() // must remove  token  first
                    commit('RESET_STATE')
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }

    export default {
        namespaced: true,
        state,
        mutations,
        actions
    }