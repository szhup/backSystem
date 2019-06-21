import axios from 'axios'
import qs from 'qs'
import router from '../router'
// import { getCookie, AUTHORIZATION_KEY } from '@/common/format'


axios.defaults.timeout = 5000;
// axios.defaults.withCredentials = true;

axios.interceptors.request.use(
    config => {
        const token = getCookie(AUTHORIZATION_KEY);
        // config.transformRequest = [function (data) {
        //     let ret = ''
        //     for (let it in data) {
        //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        //     }
        //     return ret
        // }];
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        if (token) {
            config.headers['access_token'] = token
        }
        return config;
    },
    err => {
        console.log(err)
        return Promise.reject(err);
    }
);


// http response 拦截器
axios.interceptors.response.use(response => {
    if (response.data.code == 403 || response.data.code == 401) {
        router.push({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath } //从哪个页面跳转
        })
    }
    return response;
},
error => {
    router.push({
        path: '/error',
    })
    return Promise.reject(error.response.data)
});

// export default axios;

export function postData(url, data = {}, upload) {
    return new Promise((resolve, reject) => {
        if(!upload){
            data = qs.stringify(data)
        }
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
    })
}

//get封装
export function getData(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}
export default {
    postData,
    getData
}