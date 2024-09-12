export const auth = {
    state: () => ({
        user: {},
        token: {}
    }),
    getters: {
        user({user}) {
            return user
        },
        token({token}) {
            return token
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setToken(state, payload) {
            state.token = payload
        }
    },
    actions: {
        async login({dispatch,commit}, payload) {
            let res = await dispatch('postAxios',{
                url: 'auth/login',
                data: payload
            })
            if(res.status == 200) {
                console.log(res.data)
            }
        }
    }
}