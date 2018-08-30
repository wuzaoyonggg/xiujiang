// pages/order/home-page/home-page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders: [
      {
        id: '1232',orderno: '12334524', phoneName: '苹果iphone X', color: '白色', serviceMode: '上门', address: '天府国际金融中心', 
        date: '08月22日 14：00-18：00', remark: '少放辣', state: 1, bgColor: '#fc9b00'
      },
      {
        id: '3454',orderno: '22231224', phoneName: '苹果iphone 8', color: '白色', serviceMode: '上门', address: '天府国际金融中心',
        date: '08月22日 14：00-18：00', remark: '少放辣', state: 2
      },
      {
        id: '5642',orderno: '12334524', phoneName: '苹果iphone 7', color: '白色', serviceMode: '上门', address: '天府国际金融中心',
        date: '08月22日 14：00-18：00', remark: '少放辣', state: 3
      },
      {
        id: '2587',orderno: '12334524', phoneName: '苹果iphone 6', color: '白色', serviceMode: '上门', address: '天府国际金融中心',
        date: '08月22日 14：00-18：00', remark: '少放辣', state: 4
      },
      {
        id: '12384',orderno: '12334524', phoneName: '苹果iphone 5', color: '白色', serviceMode: '上门', address: '天府国际金融中心',
        date: '08月22日 14：00-18：00', remark: '少放辣', state: 5
      }
    ],
    textColor: false
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
  goToOrderDetail: function(event) {
    var id = event.currentTarget.dataset.id;
    var state = event.currentTarget.dataset.state;
    if(state == 1) {
      wx.navigateTo({
        url: '/pages/order/submitted/submitted?id='+id+'&state='+state
      })
    }else if(state == 2) {
      wx.navigateTo({
        url: '/pages/order/accept/accept?id='+id+'&state='+state
      })
    }else if(state == 3) {
      wx.navigateTo({
        url: '/pages/order/repair/repair?id=' + id + '&state=' + state
      })
    }else if(state == 4) {
      wx.navigateTo({
        url: '/pages/order/payment/payment?id=' + id + '&state=' + state
      })
    }else if(state == 5) {
      wx.navigateTo({
        url: '/pages/order/finish/finish?id=' + id + '&state=' + state
      })
    }
  }
})