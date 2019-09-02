// pages/publish/publish.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      '二手书',
      '生活',
      '女生化妆',
      '其它',
    ],
    index: 0,
    flag: false,
    tempFilePaths: [],
    imageurl: '/image/11.png',
    sort: null,
    priceBrfore: null,
    priceNow: null,
    hidden: true,
    productId: null,
    intro:null,
  },

  //上传商品
  button: function(e) {
    var that = this


    //上传商品信息
    wx.request({
      url: 'http://' + app.globalData.host + '/productUpload',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        'session-key': app.globalData.session_key,
      },
      data: {
        priceBefore: that.data.priceBefore,
        priceNow: that.data.priceNow,
        sort: that.data.sort,
        intro: that.data.intro,
      },

      success: function(res) {
        console.log('intro',that.data.intro)
        that.setData({
          productId: res.data.product_id,
        })

        //上传商品图片
        var Url = 'http://' + app.globalData.host + '/productImgUpload'
        console.log(Url)
        //that.setData({
         // hidden: false,
        //})

        for (var index in that.data.tempFilePaths) {
          console.log('haha', that.data.tempFilePaths[parseInt(index)])
          wx.uploadFile({
            url: Url,
            filePath: that.data.tempFilePaths[parseInt(index)],
            name: 'file',
            formData: {
              productId: res.data.product_id,
              index:parseInt(index),
            },
            success(res) {
              console.log('上传图片' + res.data)
              that.setData({
                hidden: true
              })
              wx.showToast({
                title: '上传成功',
                icon: 'success',
                duration: 1000
              })
            }
          })
        }


      }
    })

    /*wx.navigateTo({
      url: '/pages/buySecHand/buySecHand',
    })*/
  },

  //图片选择
  choose: function() {
    var that = this
    wx.chooseImage({
      count: 10,
      sizeType: ['compressed', 'original'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        //console.log(res.tempFilePaths)
        var paths = that.data.tempFilePaths
        for (var img in res.tempFilePaths) {
          console.log(res.tempFilePaths[parseInt(img)])
          paths.splice(paths.length, 0, res.tempFilePaths[parseInt(img)])
        }

        that.setData({
          tempFilePaths: paths,
        })
        //console.log(paths)
        // console.log(that.data.tempFilePaths)
      }
    })
  },

  //商品类别
  change: function(e) {
    this.setData({
      flag: true,
      index: e.detail.value,
      sort: this.data.list[e.detail.value]
    })
  },

  //原价格
  priceBefore: function(e) {
    this.setData({
      priceBefore: e.detail.value,
    })
  },

  //现价格
  priceNow: function(e) {
    this.setData({
      priceNow: e.detail.value
    })
    console.log(this.data.priceBefore)
  },
  
  //商品描述
  text: function(e) {
    this.setData({
      intro: e.detail.value
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})