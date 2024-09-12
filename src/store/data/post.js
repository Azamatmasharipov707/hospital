import axios from "axios";

export const post = {
    state() {
        return {
            urlPost: 'posts',
            posts: []
        }
    },
    getters: {
        posts(state) {
            return state.posts
        }
    },
    mutations: {
        postInsert(state, payload) {
            state.posts = [...payload]
        }
    },
    actions: {
        async getPosts({dispatch, state, commit}) {
            let res = await dispatch('getAxios', state.urlPost)
                if(res.status == 200) {
                    commit('postInsert', res.data)
                }
        }
    }
}