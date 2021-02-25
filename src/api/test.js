import request from "@/utils/request"

const BASE_URL = 'http://localhost:8888'

request.get(BASE_URL + "/db.json").then(response => {
    console.log("get1", response.data);
}).catch(error => {
    console.log(error);
});