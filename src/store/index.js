
import { createStore } from "vuex";

import { modules } from "./main/modules";

export const store = createStore({
    state: () => ({
        url: 'http://195.158.9.124:4109'
    }),
    getters: {
        mainUrl(state) {
            return state.url
        }
    },
    modules
})
