// import {request} from '@/utils/request'
import { getRequest } from '../utils/request'

const login = (data) => getRequest('weapp/authorizations', 'post', data)

export {login}
