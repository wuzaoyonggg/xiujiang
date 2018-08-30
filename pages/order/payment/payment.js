// pages/order/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders: [
      {
        id: '2587', orderno: '12334524', phoneName: '苹果iphone 6', color: '白色', serviceMode: '上门', address: '天府国际金融中心',
        date: '08月22日 14：00-18：00', remark: '少放辣', state: 4

      }]
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
  goToOrderList: function() {
    wx.navigateBack({
    })
  }
})