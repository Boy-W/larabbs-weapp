import { request } from '@/utils/request'

const login = (data) => {
  return request('weapp/authorizations', {
    method: 'post',
    data: data
  })
}

const refresh = (token) => {
  return request('authorizations/current', {
    method: 'put',
    header: {
      'Authorization': 'Bearer ' + token
    }
  })
}

const logout = (token) => {
  return request('authorizations/current', {
    method: 'delete',
    header: {
      'Authorization': 'Bearer ' + token
    }
  })
}

export {
  login,
  refresh,
  logout
}
