// pages/home/home.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [
      { "title": "热门", "selected": false}, 
      { "title": "男装", "selected": false },
      { "title": "鞋包", "selected": false },
      { "title": "手机", "selected": false },
      { "title": "电器", "selected": false },
      { "title": "食品", "selected": false },
      { "title": "百货", "selected": false },
      { "title": "服饰", "selected": false },
      { "title": "汽车", "selected": false },
      { "title": "家装", "selected": false }],
    text: "text",
    imageUrls: [
      'https://gw.alicdn.com/i2/TB13qcdrStYBeNjSspaXXaOOFXa_.jpg',
      'https://gw.alicdn.com/i2/TB1kMeprGSWBuNjSsrbXXa0mVXa_.jpg',
      'https://gw.alicdn.com/i1/TB1.MF6rL9TBuNjy0FcXXbeiFXa_.jpg',
      'https://gw.alicdn.com/i3/TB1MFqxrHuWBuNjSszgXXb8jVXa_.jpg'
    ],
    shelfNavList: [
      { 'id': 1, 'name': '新品上架', 'imagePath': '../../images/shop.png' },
      { 'id': 2, 'name': '新品上架', 'imagePath': '../../images/shop.png' },
      { 'id': 3, 'name': '新品上架', 'imagePath': '../../images/shop.png' },
      { 'id': 4, 'name': '新品上架', 'imagePath': '../../images/shop.png' },
      { 'id': 5, 'name': '新品上架', 'imagePath': '../../images/shop.png' },
      { 'id': 6, 'name': '上架', 'imagePath': '../../images/shop.png' },
      { 'id': 7, 'name': '新品上架', 'imagePath': '../../images/shop.png' },
      { 'id': 8, 'name': '新品上架', 'imagePath': '../../images/shop.png' },
    ],
    productList: [
      { 'id': 1, 'name': '商品1商品1商品1商品1商品1商品1商品1商品1', 'imagePath': '../../images/shop.png' },
      { 'id': 2, 'name': '商品2', 'imagePath': '../../images/shop.png' },
      { 'id': 3, 'name': '商品3', 'imagePath': '../../images/shop.png' },
      { 'id': 4, 'name': '商品4', 'imagePath': '../../images/shop.png' },
      { 'id': 5, 'name': '商品5', 'imagePath': '../../images/shop.png' },
      { 'id': 6, 'name': '商品6', 'imagePath': '../../images/shop.png' },
      { 'id': 7, 'name': '商品7', 'imagePath': '../../images/shop.png' },
      { 'id': 8, 'name': '商品8', 'imagePath': '../../images/shop.png' },
    ],
    numberOfIconItemsPerLine: 5,
    
    // 选择分类列表的信息
    category_info: {
      last_select_index: 0,
    },

    selectedAddress: '选择收货地址',
    indicatorMarginLeft: (100 - 80) * app.globalData.widthScale,
    indicatorAnimation: {},
  },

  tapOnCategoryItem: function (e) {
    var select_index = e.target.dataset.index
    console.log(select_index)

    this.selectCategoryAtIndex(select_index)
    this.setData({
      ['category_info.last_select_index']: select_index
    })

    // 设置动画
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
    })

    console.log(app.globalData.widthScale)
    var left = (100 * select_index) * app.globalData.widthScale
    console.log('left =' + left)
    animation.translateX(left).step()

    this.setData({
      indicatorAnimation: animation.export(),
    })
  },

  selectCategoryAtIndex: function(index) {
    var lastSelectIndex = this.data.category_info.last_select_index
    // 设置给定所引处的索引
    this.setData({
      ['categories[' + lastSelectIndex + '].selected']: false,
      ['categories[' + index + '].selected']: true
    })
  },

  scroll: function(e) {
    console.log('scroll...' + e)
  },

  // 获取微信用户地址
  chooseAddress: function() {
    let self = this
    wx.chooseAddress({
      success: function(res) {
        console.log(res.userName)
        self.setData({
          selectedAddress: res.userName
        })
      },
      fail: function(res) {
        console.log("获取收货地址失败")
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.selectCategoryAtIndex(0)
    
    // wx.request({
    //   url: 'https://www.baidu.com',
    //   method: 'POST',
    //   data: {},
    //   success: function (res) {
    //     console.log(res)
    //     var code = res.statusCode
      
    //   },
    //   fail: function (res) {
    //     console.log(res);
    //   }
    // })
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
    console.log('pull down')
    wx.showNavigationBarLoading() //在标题栏中显示加载

    setTimeout(function() {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 1500)
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (e) {
    console.log(JSON.stringify(e))
    console.log('pull up')

    let self = this

    wx.showLoading({
      title: '正在加载中...',
    })

    setTimeout(function() {
      wx.hideLoading()
      var newProudctList = self.data.productList
      for (let i=0; i<6; i++) {
        var index = newProudctList.length
        newProudctList = newProudctList.concat({ 'id': index, 'name': '商品' + index, 'imagePath': '../../images/shop.png' })
      }
      
      self.setData({
        productList: newProudctList
      })
      
    }, 2000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})