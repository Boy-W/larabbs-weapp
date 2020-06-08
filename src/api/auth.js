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

const getCaptcha = (phone) => {
  return request('captchas', {
    method: 'post',
    data: {
      phone: phone
    }
  })
}

const getVerificationCode = (key, code) => {
  return request('verificationCodes', {
    method: 'post',
    data: {
      captcha_key: key,
      captcha_code: code
    }
  })
}

export {
  login,
  refresh,
  logout,
  getCaptcha,
  getVerificationCode
}
