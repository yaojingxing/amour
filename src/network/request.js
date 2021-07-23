import axios from 'axios';
export function request(config){
    const instance=axios.create({
        baseURL:"http://localhost:3001/",
        timeout:5000
    })

    instance.interceptors.request.use(config=>{
        return config
    },err=>{
        console.log(err);
    })

    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err);
    })
    //return a promise
    return instance(config);
}