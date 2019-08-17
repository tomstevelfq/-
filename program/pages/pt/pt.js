// pages/pt/pt.js
var app = getApp();
var status = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ptArray: [{
      id: 1,
      src: '/image/6.png',
      title: '焕世界创业团队',
      pay: '薪资：面谈',
      tel: '联系：18801122106',
      request:'1.网站，数据库运维经验\n2.网站前后端设计经验\n3.公众号界面板块设计，推送制作，运维经验\n4.制作，运维微信小程序经验\n5.产品营销经验，或非常有营销想法，均可\n6.平板设计，可包含海报，网页，宣传册等经验'
    }, {
        id: 2,
        src: '/image/6.png',
        title: '缺位以待',
        pay: '薪资：暂无',
        tel: '联系：18801122106',
        request: '这里是兼职广告位出租！欢迎诚意商谈！'
      }],
    unload: false,
    latest: true,//最新一期初始化
    first: false,//最早一期初始化
    status: true
  },

  /**
   * 触底加载
   */
  onReachBottom: function () {
    let temporaryArray = this.data.ptArray;
    temporaryArray.push(...this.data.ptArray);
    this.setData({
      ptArray: temporaryArray
    })
  },

  /**
   * 初始加载
   */
  onLoad: function (options) {
    /*wx.request({
      url: 'http://',
      data: {
       id : globalData.id,
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },

      success: function (res) {
        console.log(res.data)
        that.setData({
          ptArray: res.data.pt[0]
        )}
        wx.setStorageSync('ptArray', res.data.pt[0])
      }
    })*/
  },

  /**
   * 防止重复加载
   */
  onPageScroll(event) { 
    if (event.scrollTop > 300 && this.data.unload == false) {
      this.setData({
        unload: true
      })
    } else if (event.scrollTop < 300 && this.data.unload == true) {
      this.setData({
        unload: false
      })
    }
  },

  /**
   *返回顶部 
   */
  skipTop() { 
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
    this.setData({
      unload: false
    });
  },
  modal: function (event) {
    console.log("触发了点击事件，弹出toast")
    status = false
    this.setData({
      status: status
    })　　　　//setData方法可以建立新的data属性，从而起到跟视图实时同步的效果
    wx.showModal({
      title: '要求',
      content: event.currentTarget.dataset.request,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})