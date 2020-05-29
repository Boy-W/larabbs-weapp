import wepy from '@wepy/core'

const host = 'http://larabbs.test/api/v1/' // 服务器接口地址

const getRequest = (url, method, data) => {
  let promise = new Promise((resolve, reject) => {
    wepy.wx.request({
      url: host + url,
      data: data || {},
      method: method,
      success(res) {
        if (res.success) {
          resolve(res)
        } else {
          reject(res)
        }
      },
      fail (err) {
        reject(err)
      }
    })
  })
  return promise
}

export {getRequest}
