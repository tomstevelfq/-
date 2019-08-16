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
    list:null,
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
    wx.navigateTo({
      url: '/pages/product/product',
    })
  },
  //事件处理函数
  onLoad: function () {
    var that=this
    this.setData({
      navData: [
        {
          text: "二手书"
        },
        {
          text: '生活'
        },
        {
          text: '女生化妆'
        },
        {
          text: '其他'
        },
      ],
    })

    _animation = wx.createAnimation({
      transformOrigin: '50% 50% 0',
      duration: _ANIMATION_TIME,
      timingFunction: 'linear', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
    })


    wx.request({
      url: 'http://' + app.globalData.host + '/products',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
     
      success: function (res) {
        console.log('商品'+res.data)
        that.setData({
          listt:res.data,
          list:res.data[0]
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