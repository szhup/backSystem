import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/promission'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        permission
    }
})
export default store