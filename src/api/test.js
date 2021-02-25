import request from '@/utils/request'

const BASE_URL = 'http://localhost:8888'

// 测试1
request.get(BASE_URL + '/db.json').then(response => {
    console.log('get1', response.data)
}).catch(error => {
    console.log(error);
})

// 测试2 对象的形式
request({
    url: BASE_URL + '/db.json',
    method: 'get'
}).then(response => {
    console.log('get2', response.data)
}).catch(error => {
    console.log(error)
})

// 测试三 导出默认对象
export default {
    getList() {
        const req = request({
            url: BASE_URL + "/db.json",
            method: "get"
        });
        // console.log(req) // Promise
        return req;
    }
}
