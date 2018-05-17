import axios from 'axios'

localStorage.setItem('propertyId', 1)
let tokens = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODMwMjEzMzI4NyIsInVzZXJfaWQiOjEsImNyZWF0ZWQiOjE1MjQ3MzExNTA4MDMsImV4cCI6MTUyNTU5NTE1MH0.BFhYGjrJ7APtgW_fWE6AEuh24khvBpet3Ss5NaX7zFitxc8TAarQTUZCrrjNPVbcyUEFBNRxUPePcMRpQKgfmw'
let ajaxBaseUrl = process.env.API_ROOT
let $http = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Authorization': tokens
    },
    responseType: 'json',
    transformRequest: [function (data) {
        return JSON.stringify(data)
    }],
    baseURL: ajaxBaseUrl
})
export { $http }
