import axios from 'axios'

export const helpers = {
    actions: {
        async getAxios({getters}, payload) {
            return await axios.get(`${getters.mainUrl}/${payload}`)
        },
        async postAxios({getters,commit}, payload) {
            return await axios.post(`${getters.mainUrl}/${payload.url}`, payload.data)
            .catch(e => {
                console.log(e.response.data)
                let {data} = e.response

                commit('setNotif',{
                    type: 'danger',
                    text: data
                })
                console.clear()
            })
        }
    }
}