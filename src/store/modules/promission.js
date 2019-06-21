const permission = {
    state:{
        addRouters:[]
    },
    getters:{
        addRouters:state => state.addRouters
    },
    mutations:{
        setRouters(state,routers) {
            state.addRouters = routers
        }
    },
    actions:{
        GenerateRoutes({ commit }, data){
            commit('setRouters',data)
        }
    }
}
export default permission