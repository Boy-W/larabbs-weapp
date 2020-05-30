import { request } from '@/utils/request'

const login = (data) => {
  return request('weapp/authorizations', {
    method: 'post',
    data: data
  })
}

export {
  login
}
