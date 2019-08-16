// pages/purchaseSecHand/purchaseSecHand.js
Page({
  data: {
   searchValue:"本熊",
  },
  button1:function(e){
    wx.navigateTo({
      url: '/pages/buySecHand/buySecHand',
    })
  },
  button2: function (e) {
    wx.navigateTo({
      url: '/pages/wantSecHand/wantSecHand',
    })
  },
})