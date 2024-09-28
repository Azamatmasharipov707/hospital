import axios from 'axios'
import cookies from 'vue-cookies'
export const helpers = {
    actions: {
        async getAxios({getters}, payload) {
            return await axios.get(`${getters.mainUrl}/${payload}`,  {
                headers: {
                    'authorization': `Bearer ${getters.token}`
                }
            })
        },
        async postAxios({getters,commit}, payload) {
            return await axios.post(`${getters.mainUrl}/${payload.url}`, payload.data, {
                headers: {
                    'authorization': `Bearer ${getters.token}`
                }
            })
            .catch(e => {
                console.log(e.response.data)
                let {data, status} = e.response

                commit('setNotif',{
                    type: 'danger',
                    text: data
                })
                // console.clear()

                if(status == 404) {
                    cookies.remove('hospital-token')
                    cookies.remove('hospital-user')
                    commit('setLayout', 'auth')
                }
                console.log(e.response)
            })
        },
        async deleteAxios({getters,commit}, payload) {
            return await axios.delete(`${getters.mainUrl}/${payload}`, {
                headers: {
                    'authorization': `Bearer ${getters.token}`
                }
            })
        },
        
    }
}