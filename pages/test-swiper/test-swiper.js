Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrls: [
      'https://gw.alicdn.com/i2/TB13qcdrStYBeNjSspaXXaOOFXa_.jpg',
      'https://gw.alicdn.com/i2/TB1kMeprGSWBuNjSsrbXXa0mVXa_.jpg',
      'https://gw.alicdn.com/i1/TB1.MF6rL9TBuNjy0FcXXbeiFXa_.jpg',
      'https://gw.alicdn.com/i3/TB1MFqxrHuWBuNjSszgXXb8jVXa_.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },

  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoPlay: function() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  changeInterval: function(e) {
    console.log(e)
    this.setData({
      interval: e.detail.value
    })
  },
  changeDuration: function(e) {
    console.log(e)
    this.setData({
      duration: e.detail.value
    })
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
    
  }
})