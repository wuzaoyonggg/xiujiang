// pages/me/become-distributor/distribution-center/distribution-center.js
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
  goToDistributionMoney: function() {
    wx.navigateTo({
      url: '/pages/me/become-distributor/distribution-center/distribution-money/distribution-money'
    })
  },
  goToDistributionOrder: function() {
    wx.navigateTo({
      url: '/pages/me/become-distributor/distribution-center/distribution-order/distribution-order'
    })
  },
  goToMeDownline: function() {
    wx.navigateTo({
      url: '/pages/me/become-distributor/distribution-center/me-downline/me-downline'
    })
  },
  goToGetMoney: function() {
    wx.navigateTo({
      url: '/pages/me/become-distributor/distribution-center/get-money/get-money'
    })
  },
  goToMaterielApply: function() {
    wx.navigateTo({
      url: '/pages/me/become-distributor/distribution-center/materiel-apply/materiel-apply'
    })
  }
})