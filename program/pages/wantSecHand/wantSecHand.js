// pages/wantSecHand/wantSecHand.js
 Page({
   
    /**
     * 页面的初始数据
     */
    data: {
         navbarActiveIndex: 0,
         backgroundColor:"blue",
         navbarValue: [
             [1,"用户1","/image/2.jpeg","标题","购买闲置物品在这里看好开始购买","5月5日17:27"],
           [1, "用户1", "/image/2.jpeg", "标题", "购买闲置物品在这里看好开始购买", "5月5日17:27"],
           [1,"用户1","/image/2.jpeg","标题","购买闲置物品在这里看好开始购买","5月5日17:27"],
                     ],
        navbarTitle: [
        "购闲置",
        "求闲置",
        "Top"
        ],  
       },
   
   /**
    * 点击导航栏
    */
   onNavBarTap: function (event) {
         // 获取点击的navbar的index
         let navbarTapIndex = event.currentTarget.dataset.navbarIndex
         // 设置data属性中的navbarActiveIndex为当前点击的navbar
         this.setData({
             navbarActiveIndex: navbarTapIndex      

    })
    
  },
   
   /**
    * 
    */
   onBindAnimationFinish: function ({ detail }) {
         // 设置data属性中的navbarActiveIndex为当前点击的navbar
         this.setData({
             navbarActiveIndex: detail.current
     })
    
  },

  productButton:function(){
      wx.navigateTo({
        url: '/pages/product/product',
      })
  }

 })