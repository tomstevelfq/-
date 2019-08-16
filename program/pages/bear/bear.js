// pages/bear/bear.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     signIn:0,
  },

  //签到按钮
  button:function(e){
    if(this.data.signIn==0)
    {
    wx.showToast({
      title: '签到成功+1',
      icon: 'success',
      duration: 1000
    })
    this.data.signIn=1;
    }
    else{
      wx.showToast({
        title: '已签到',
        icon: 'success',
        duration: 1000
      })
    }
  },

  //我的收藏按钮
  collect:function(e){
     wx.navigateTo({
       url: '/pages/collect/collect',
     })
  },

    //我的发布按钮
  release: function (e) {
    wx.navigateTo({
      url: '/pages/release/release',
    })
  },
  
    //我的信息按钮
  message: function (e) {
    wx.navigateTo({
      url: '/pages/message/message',
    })
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