import axios from "axios"

export default {
    namespaced: true,
    state: {
        user: null
    },
    getters: {
        authUser(state) {
            return state.user || null
        },
        isAuthenticated(state) {
            return !!state.user
        }
    },
    actions: {
        loginWithEmailAndPassword({ commit }, userData) {
            console.log(userData)
            return axios.post('https://impulseguillermo.herokuapp.com/api/auth/signin', userData).then(res => {
                const user = res.data
                localStorage.setItem('impulse-jwt', user.token)
                commit('setAuthUser', user)
            })
        },
        registerUser(context, userData) {
            return axios.post('https://impulseguillermo.herokuapp.com/api/auth/signup', userData)
        },

    },
    mutations: {
        setAuthUser(state, user) {
            return state.user = user
        }
    }
}