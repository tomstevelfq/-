// pages/buySecHand/buySecHand.js
const app = getApp()
var _animation;
var _animationIndex
var _loadImagePathIndex = 0
const _ANIMATION_TIME = 500;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navData:null,
    currentTab: 0,
    navScrollLeft: 0,
    animation:'',
    product_list:null,
    listt:null,
    host:'http://'+app.globalData.host+'/static/',
  },

  onShow: function () {
    _animation.rotateZ(0).scale(1).step()
    this.setData({
      animation: _animation.export(),
    })
  },


  rotate: function (n) {
      _animation.rotateZ(180 * 1).scale(1.5).step()
      this.setData({
        animation: _animation.export(),
      })
      wx.navigateTo({
        url: '/pages/publish/publish',
      })
  },



  tapBuyButton:function(e){
    console.log('tap-button')
    console.log(e.currentTarget.id)
    app.globalData.product_id = this.data.product_list[e.currentTarget.id].productId
    console.log(app.globalData.product_id)
    wx.navigateTo({
      url: '/pages/product/product',
    })
  },
  //事件处理函数
  onLoad: function () {
    var that=this

    _animation = wx.createAnimation({
      transformOrigin: '50% 50% 0',
      duration: _ANIMATION_TIME,
      timingFunction: 'linear', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
    })

    console.log('session_key')
    console.log(app.globalData.session_key)

    //请求导航栏菜单选项
    wx.request({
      url:'http://' + app.globalData.host + '/navdata',
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'session-key':app.globalData.session_key,
      },
      success:function(res){
        console.log('导航栏')
        console.log(res.data.state)
        //判断是否处于登录
        if(res.data.state=='have login'){
          console.log(res.data.nav_list)
          that.setData({
            navData:res.data.nav_list
          })
        }
        else{
          wx.showModal({
            title: '提示',
            content: '未登录',
          })
        }
      }
    })


    wx.request({
      url: 'http://' + app.globalData.host + '/productShow',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
     
      success: function (res) {
        console.log('商品信息'+res.data)
        that.setData({
          product_list:res.data
        })
      }
    })

    


  },
  switchNav(event) {
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/4
    var singleNavWidth = this.data.windowWidth / 4;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2.5) * singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }

    this.setData({
       list:this.data.listt[cur]
    })
  },
  switchTab(event) {
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 1) * singleNavWidth
    });
  }
})