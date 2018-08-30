// pages/me/become-distributor/distribution-center/materiel-apply/materiel-apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [
      {
        name: '门店物料1', applyState: '待审核', totalNum: 2, bindNum: 0, overplus: 0,
        mail: '243534523@qq.com', date: '2018-1-1 13:14:42'
      },
      {
        name: '门店物料2', applyState: '已通过', totalNum: 3, bindNum: 3, overplus: 0,
        mail: '243534523@qq.com', date: '2018-2-1 14:14:42'
      },
      {
        name: '门店物料3', applyState: '待审核', totalNum: 4, bindNum: 0, overplus: 0,
        mail: '243534523@qq.com', date: '2018-3-1 15:14:42'
      }
    ]
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
  goToMaterielApply2: function() {
    wx.navigateTo({
      url: '/pages/me/become-distributor/distribution-center/materiel-apply/materiel-apply2/materiel-apply2'
    })
  }
})