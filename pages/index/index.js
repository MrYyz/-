Page({

  /**
   * 页面的初始数据
   */
  data: {
    sliderList: [],
    navList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://locally.uieee.com/slides',
      success: (res) => {
        this.setData({//更新数据/更新视图
          sliderList: res.data
        })
      },
      fail(err) {
        console.error("请求报错：", err)
      }
    })
    wx.request({
      url: 'https://locally.uieee.com/categories',
      success: (res) => {
        this.setData({
          navList: res.data
        })
      },
      fail: (err) => {
        console.error(err)
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