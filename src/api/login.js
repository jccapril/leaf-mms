import request from '@/utils/request'

export function login(username,password) {
    return request({
        url: 'user/login',
        method: 'POST',
        data: {
            username,
            password
        }
    })
}


export function getUserInfo(token){
    return request({
        url: 'user/info/${token}',
        method: 'GET'
    })
}