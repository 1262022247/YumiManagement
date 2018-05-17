import axios from 'axios'

let tokens = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODMwMjEzMzI4NyIsInVzZXJfaWQiOjEsImNyZWF0ZWQiOjE1MjQ4MDg2MDM5MjAsImV4cCI6MTUyNTY3MjYwM30.ZIf3bU64W00ZJewPST01fmFfP6DSXmHvpfxAmf0jJOk-Ite6uizdrsy9MFd9Fuwcix_GyrMul2jRPhG5M6bNIw'
let ajaxBaseUrl = process.env.API_ROOT
console.log(process.env)
let $http = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Authorization': tokens
    },
    responseType: 'json',
    transformRequest: [function (data) {
        return JSON.stringify(data)
    }],
    baseURL: 'http://api.yumizd.com/manage'
})
export { $http }
