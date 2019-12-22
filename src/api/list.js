import config from '../../config/index'
 import Axios from 'axios'
let { 
    BASE_API 
    } = config;
    export const ListApi = () => Axios.get(BASE_API + '/list')

     // export const ListApi = BASE_API + '/list'

    
    
    
   