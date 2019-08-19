// pages/publish/publish.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
       list:[
         '二手书',
         '生活',
         '女生化妆',
         '其它',
       ],
       index:0,
       flag:false,
       tempFilePaths:null,
       imageurl: '/image/11.png',
       sort:null,
       priceBrfore:null,
       priceNow:null,
       content:null,
       hidden:true,
  },

  button:function(e){
     var that=this
    var urll = 'http://' + app.globalData.host + '/uploadProduct/' + that.data.sort+'/' + that.data.price2+'/' + that.data.content
    console.log(urll)
     this.setData({
       hidden:false,
     })
     wx.uploadFile({
       url: urll,
       filePath: that.data.imageurl,
       name: 'file',
       success(res){
         console.log('上传图片'+res.data)
         that.setData({
           hidden:true
         })
         wx.showToast({
           title: '上传成功',
           icon:'success',
           duration:1000
         })
       }
     })
     wx.navigateTo({
       url: '/pages/buySecHand/buySecHand',
     })
  },

  choose: function () {
    var that=this
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed','original'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          tempFilePaths: res.tempFilePaths,
          imageurl: res.tempFilePaths[0],
        })
      }
    })
  },

  //商品类别
  change:function(e){
     this.setData({
       flag:true,
       index:e.detail.value,
       sort:this.data.list[e.detail.value]
     })
  },
  
  //原价格
  priceBefore:function(e){
    this.setData({
      priceBefore:e.detail.value,
    })
  },
  
  //现价格
  priceNow:function(e){
    this.setData({
      priceNow:e.detail.value
    })
    console.log(this.data.priceBefore)
  },

  text:function(e){
     this.setData({
       content:e.detail.value
     })
    console.log(this.data.priceNow)
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})