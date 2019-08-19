//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var that = this

    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    /*wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          this.globalData.code = res.code
          var that = this
          console.log("host" + that.globalData.host)
          wx.request({
            url: 'http://' + that.globalData.host + '/openid',
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              code: JSON.stringify(that.globalData.code),
            },//注意这里哈！有TODO哦！！！！！！！！！！！！！！！！！

            success: function (res) {
              if (that.userInfoReadyCallback) {
                that.userInfoReadyCallback(res)
              }
              that.globalData.openid = res.data
              console.log('成功获取code' + that.globalData.code)
              console.log('成功接收openid' + that.globalData.openid)
            }
          })
        }
      }
    })*/

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res.userInfo)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 登录
              wx.login({
                success: res => {
                  // 发送 res.code 到后台换取 openId, sessionKey, unionId
                  if (res.code) {
                    this.globalData.code = res.code
                    var that = this
                    console.log("host" + that.globalData.host)
                    wx.request({
                      url: 'http://' + that.globalData.host + '/openid',
                      method: 'POST',
                      header: {
                        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                      },
                      data: {
                        code: that.globalData.code,
                        userInfo: JSON.stringify(that.globalData.userInfo),
                      },//注意这里哈！有TODO哦！！！！！！！！！！！！！！！！！

                      success: function (res) {
                        if (that.userInfoReadyCallback) {
                          that.userInfoReadyCallback(res)
                        }
                        that.globalData.session_key = res.data.session_key
                        console.log('成功获取code:' + that.globalData.code)
                        console.log('成功接收session_key:' + that.globalData.session_key)
                        console.log('成功接收userInfo:' + res.data.userInfo)
                      }
                    })
                  }
                }
              })

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    host: '139.155.86.119:8882',
    code:null,
    session_key:null,
  }
})