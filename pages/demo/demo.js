const app = getApp()

var inputinfo = "";

var global_data = {
  animationData: {},
  showModalStatus: true,
  address: ""
}

Page({
  data:{
    demoText:global_data.name,
    testData1: { "firstName": "Jack", "lastName": "Dothen" },
    testData2: { "firstName": "Lucy", "lastName": "Rose" },
  },
  changeme: function(e) {
    console.log(this.demoText)
    this.setData({
      demoText: 'MINA'
    })
  },

  showModal: function () {
    // 显示遮罩层    
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "ease-in-out",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 20)
  },
  //myview 为点击控件的bindtap 应用时写在对应控件中就好  
  myview: function () {
    if (this.data.showModalStatus) {
      this.hideModal();
    } else {
      this.showModal();
    }
  },
  hideModal: function () {
    // 隐藏遮罩层    
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 20)
  },
  click_cancel: function () {
    console.log("点击取消");
    this.hideModal();
  },
  click_ok: function () {
    console.log("点击确定，输入的信息为为==", inputinfo);
    this.hideModal();
  },
  input_content: function (e) {
    console.log(e);
    inputinfo = e.detail.value;
  },
  onShow: function() {
  }
  
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