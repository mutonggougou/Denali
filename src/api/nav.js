import config from '../../config/index'
 import Axios from 'axios'

let {
    BASE_API
} = config;
    export const navApi = () => Axios.get( BASE_API + '/nav')
    // export const ListApi = BASE_API + '/navigation'