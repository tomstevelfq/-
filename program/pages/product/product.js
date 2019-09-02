// pages/product/product.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true,
    modalHidden:true,
    img_list:null,
    priceNow:null,
    intro:null,
  },

  modalinput: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  //取消按钮  
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  //确认  
  confirm: function () {
    this.setData({
      hiddenmodalput: true
    })
  },

  //文本编辑框
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },
  

  //收藏
  collect:function(e){
    wx.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 1000
    })
  },
  
  //联系他
  contact:function(e){
     this.setData({
       modalHidden: false,
     })
  },

  modalCandel: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },

  /**
   *  点击确认
   */
  modalConfirm: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    //获取商品信息
    wx.request({
      url: 'http://' + app.globalData.host + '/productData',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'session-key': app.globalData.session_key,
      },
      data:{
        product_id:app.globalData.product_id,
      },
      success: function (res) {
        console.log('商品信息')
       // console.log(res.data.state)
        //判断是否处于登录
        //if (res.data.state == 'have login') {
          var lis=res.data.imgs
          console.log(lis[1].index,lis.length-1)
        for (var i = lis.length-1;i>0;i--){
            for(var j=0;j<i;j++){
              if(lis[j].index>lis[j+1].index){
                var temp=lis[j+1]
                lis[j+1]=lis[j]
                lis[j]=temp
              }
            }
          }
          console.log(lis)
          that.setData({
            img_list:lis,
            priceNow:res.data.priceNow,
            intro:res.data.intro,
          })
        //}
        //else {
        //  wx.showModal({
        //    title: '提示',
         //   content: '未登录',
        //  })
       // }
      }
    })
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