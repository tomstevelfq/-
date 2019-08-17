// pages/pt/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ptArray: [
      [{
        id: 1,
        src: '/image/6.png',
        title: '焕世界创业团队',
        pay: '薪资：面谈',
        tel: '联系：18801122106',
        content:''
      }], [{
        id: 2,
        src: '/image/6.png',
        title: '缺位以待',
        pay: '薪资：暂无',
        tel: '联系：18801122106'
      }]
    ],
    cat: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      cat: options.cat
    })
    console.log(that.data.cat)
    /*wx.getStorage({
      key: 'ptArray',
      success: function (res) {
        // success
        that.setData({
          ptArray: res.data
        })
      }
    })*/
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