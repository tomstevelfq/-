
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  //搜索按钮
  search: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  //购闲置按钮
  purchaseTap: function(){
      wx.navigateTo({
        url: '/pages/purchaseSecHand/purchaseSecHand',
      })
  },

  studentPrice:function(){
    wx.navigateTo({
      url: '/pages/studentPrice/studentPrice',
    })
  },

  secHand:function(){
    wx.navigateTo({
      url: '/pages/purchaseSecHand/purchaseSecHand',
    })
  },

  pt: function () {
    wx.navigateTo({
      url: '/pages/pt/pt',
    })
  },

  edu: function () {
    wx.navigateTo({
      url: '/pages/edu/edu',
    })
  }
})