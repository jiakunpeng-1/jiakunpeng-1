// import axios from 'axios';
// axios.defaults.timeout = 5000;//延时处理
// // api地址公共部分
// const baseURL = 'http://apitest.com'

// //http request 拦截器
// axios.interceptors.request.use(
//     config => {
//         config.headers = {
//             'Content- Type': 'application / x - www - form - urlencoded; charset = UTF - 8'
//         }
//         return config;
//     },
//     error => {
//         console.log(error);
//         return Promise.reject(error);
//     }
// );

// //http response 拦截器
// // axios.interceptors.response.use(
// //     response => {
// //         if (response.data.errCode == 2) {
// //             router.push({
// //                 path: "/",
// //                 querry: { redirect: router.currentRoute.fullPath } //从哪个页面跳转
// //             })
// //         }
// //         return response;
// //     },
// //     error => {
// //         console.log(error)
// //         return Promise.reject(error)
// //     }
// // )

// /**

// get方法，对应get请求
// @param {String} url [请求的url地址]
// @param {Object} params [请求时携带的参数]
// **/
// export function get(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.get(baseURL + url, {
//             params: params
//         })
//             .then(res => {
//                 resolve(res);
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     });
// }
// /** 
// post方法，对应post请求
// @param {String} url [请求的url地址]
// @param {Object} params [请求时携带的参数]
// **/
// // 对所有 axios 请求做处理
// //getData可以用qs来代替
// var getData = function (data) {
//     try {
//         var tempArr = []
//         for (var i in data) {
//             var key = encodeURIComponent(i)
//             var value = encodeURIComponent(data[i])
//             tempArr.push(key + '=' + value)
//         }
//         var urlParamsStr = tempArr.join('&')
//         return urlParamsStr
//     } catch (err) {
//         return ''
//     }
// }

// export function post(url, params) {
//     //不携带cookie
//     axios.defaults.withCredentials = false
//     return new Promise((resolve, reject) => {
//         axios.post(baseURL + url, getData(params)).then(function (res) {
//             resolve(res);
//         }).catch(function (error) {
//             reject(error)
//         })
//     });
// }

// // 后面就在main.js引入