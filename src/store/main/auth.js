import cookies from 'vue-cookies'

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

                let {token, user} = res.data
                commit('setUser', user)
                commit('setToken', token)
                commit('setNotif', {
                    type: 'success',
                    text: 'Xush kelipsiz 🤝'
                })

                cookies.set('hospital-token',token)
                cookies.set('hospital-user',user)

                commit('setLayout', 'def')
            }
        },
        async checkUser({dispatch, commit}) {
            if(cookies.isKey('hospital-user') && cookies.isKey('hospital-token')) {
                commit('setUser',cookies.get('hospital-user'))
                commit('setToken',cookies.get('hospital-token'))

                let user = cookies.get('hospital-user')
                let res = await dispatch('postAxios', {
                    url: `auth/checkUser`,
                    data: {
                        id: user.id
                    }
                })
                if(res.status == 200) {
                    console.log(res.data)
                    cookies.set('hospital-user', res.data)
                    commit('setUser', res.data)
                    commit('setLayout', 'def')
                }
            } else {
                cookies.remove('hospital-token')
                cookies.remove('hospital-user')
                commit('setLayout', 'auth')
            }
        },
        exit({commit}) {
            cookies.remove('hospital-token')
            cookies.remove('hospital-user')
            commit('setLayout','auth')
            commit('setNotif', {
                type: 'warning',
                text: 'Tizimdan chiqdingiz 🖐️'
            })
        },
        async register({dispatch}, payload) {
            return await dispatch('postAxios', {
                url: 'auth/reg',
                data: payload
            })
        }
    }
}