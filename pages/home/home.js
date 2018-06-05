// pages/home/home.js
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
      { 'id': 6, 'name': '新品上架', 'imagePath': '../../images/shop.png' },
      { 'id': 7, 'name': '新品上架', 'imagePath': '../../images/shop.png' },
      { 'id': 8, 'name': '新品上架', 'imagePath': '../../images/shop.png' },
    ],
    numberOfShelfItemPerLine: 4,
    
    // 选择分类列表的信息
    category_info: {
      last_select_index: 0,
    }
  },

  tapOnCategoryItem: function (e) {
    var select_index = e.target.dataset.index
    console.log(select_index)

    this.selectCategoryAtIndex(select_index)
    this.setData({
      ['category_info.last_select_index']: select_index
    })

    console.log(this.data.category_info)
  },

  selectCategoryAtIndex: function(index) {
    var lastSelectIndex = this.data.category_info.last_select_index
    this.setData({
      ['categories[' + lastSelectIndex + '].selected']: false,
      ['categories[' + index + '].selected']: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.selectCategoryAtIndex(0)
    
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