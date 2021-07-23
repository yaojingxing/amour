import {request} from '@/network/request.js'

export const getAlbumData=()=>{
    return request({
        url:"bitch/"
    })
}