import config from '../../config/index'
 import Axios from 'axios'


// export const ListApi = () => Axios
// 这个是列表接口，利用axios抛出一个方法，返回一个方法叫listAPI 地址是通过config拿到Api
let {
    BASE_API
} = config;
 export const myselfApi = () => Axios.get( BASE_API + '/myself')
 //export const ListApi = BASE_API + '/myself'
 



