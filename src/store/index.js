import Vuex from "vuex"
import Vue from "vue"
import ideas from "./modules/ideas"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ideas,
    },
})
