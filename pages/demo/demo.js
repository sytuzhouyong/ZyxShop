const app = getApp()

var inputinfo = "";

var global_data = {
  animationData: {},
  showModalStatus: true,
  address: ""
}

Page({
  data: {
    hideModal: true, //模态框的状态  true-隐藏  false-显示
    animationData: {},//
    productInfo: {
      price: '200.01'
    }
  },

  // 显示遮罩层
  showModal: function () {
    var that = this;
    that.setData({
      hideModal: false
    })
    var animation = wx.createAnimation({
      duration: 300,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    setTimeout(function () {
      that.fadeIn();//调用显示动画
    }, 200)
  },

  // 隐藏遮罩层
  hideModal: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 300,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    that.fadeDown();//调用隐藏动画   
    setTimeout(function () {
      that.setData({
        hideModal: true
      })
    }, 300)//先执行下滑动画，再隐藏模块 

  },

  //动画集
  fadeIn: function () {
    this.animation.translateY(0).step()
    this.setData({
      animationData: this.animation.export()//动画实例的export方法导出动画数据传递给组件的animation属性
    })
  },
  fadeDown: function () {
    this.animation.translateY(520).step()
    this.setData({
      animationData: this.animation.export(),
    })
  },
})


// ,
  // "tabBar": {
  //   "list": [
  //     {
  //       "pagePath": "pages/index/index",
  //       "text": "index"
  //     },
  //     {
  //       "pagePath": "pages/demo/demo",
  //       "text": "demo"
  //     }
  //   ]
  // }