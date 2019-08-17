// pages/search/search.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    re: [],
    jieshao: ' ',
    result: ' '
  },

  /**
   * 生命周期函数--监听页面加载
   */
  details: function(e) {
    app.globalData.id = e.currentTarget.id
    wx.navigateTo({
      url: '../details/details?id=' + e.currentTarget.id,
    })

  },
  cutChar: function (ch) {
    var s = [];
    var i = 0;
    for (i = 0; i < 11; i++) {
      s += ch[i];
    }
    s += "..."
    return s;
  },

  onLoad: function(options) {},
  formSubmit: function(e) {
    var that = this;
    that.setData({
      result: ' ',
      re: null,
      jieshao: ' '
    })
    wx.showLoading({
      title: '努力搜索ing',
    })

    var formData = e.detail.value; //获取表单所有name=id的值  
    wx.request({
      url: 'https://140.143.18.12/share/wangzx/search.php?id=' + formData,
      data: formData,
      method: "get",
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        wx.hideLoading()  
              var i;
        for (i = 0; i < res.data.length; i++) {
          if (res.data[i].title.length > 11) {
            res.data[i].title = that.cutChar(res.data[i].title);
          }
          if (res.data[i].type == "音乐") res.data[i].type = '../../image/music.png';
          else if (res.data[i].type == "软件") res.data[i].type = '../../image/software.png';
          else if (res.data[i].type == "书籍") res.data[i].type = '../../image/book.png';
          else if (res.data[i].type == "视频") res.data[i].type = '../../image/video.png';

        }

        if (res.data.length == 0) {
          that.setData({
            jieshao: ' ',
            result: '没有你要找的东西呢',
            re: null
          })
        } else if (res.data[0].result == '表单为空...') {
          that.setData({
            jieshao: ' ',
            result: '别骗我，你明明什么也没输',
            re: null
          })


        } else {
          console.log(res.data)
          that.setData({

            jieshao: '介绍',
            result: ' ',
            re: res.data,
          })

        }

        // wx.showToast({
        //   title: '已提交',
        //   icon: 'success',
        //   duration: 1000
        // })
      }
    })
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