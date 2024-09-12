import axios from "axios";

export const album = {
    state: () => ({
        urlAlbum: 'albums'
    }),
    getters: {
        album(state) {
            return state.albums
        }
    },
    mutations: {
        albums(state, payload) {
            state.albums = [...payload]
        }
    },
    actions:{
        async getAllAlbums(context) {
            let res = await context.dispatch('getAxios', context.state.urlAlbum)
            if(res.status == 200) {
                context.commit('')
            }
            
        }
    } 
}