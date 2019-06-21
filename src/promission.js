import router from './router'
const _import = require('./router/_import_' + process.env.NODE_ENV)//获取组件的方法
const Layout = _import('index');
import store from './store'
let getRouter
router.beforeEach((to, from, next) => {
    if (!getRouter) {//不加这个判断，路由会陷入死循环     
        getRouter = [
            {
                path: '/index',
                name: 'index',
                component: 'index',
                redirect: "roleList",
                title: "管理员管理",
                children: [
                    {
                        path: '/roleList',
                        name: 'roleList',
                        component: 'admin/roleList',
                        title: '角色列表'
                    },
                    {
                        path: '/adminList',
                        name: 'adminList',
                        component: 'admin/adminList',
                        title: '管理员列表'
                    }
                ]
            }
        ]
        routerGo(to, next)//执行路由跳转方法
    } else {
        next()
    }
})

function filterAsyncRouter(asyncRouterMap) { //遍历后台传来的路由字符串，转换为组件对象
    const accessedRouters = asyncRouterMap.filter(route => {
        if (route.component) {
            if (route.component === 'index') {//Layout组件特殊处理
                route.component = Layout
            } else {
                route.component = _import(route.component)
            }
        }
        if (route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children)
        }
        return true
    })
    store.dispatch('GenerateRoutes',accessedRouters)
    return accessedRouters
}
function routerGo(to, next) {
    getRouter = filterAsyncRouter(getRouter) //过滤路由
    router.addRoutes(getRouter) //动态添加路由
    next({ ...to, replace: true })
}