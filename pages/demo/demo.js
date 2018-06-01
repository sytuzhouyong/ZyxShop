const app = getApp()

var global_data = {
  name: 'wechat'
}

Page({
  data:{
    demoText:global_data.name,
    testData1: { "firstName": "Jack", "lastName": "Dothen" },
    testData2: { "firstName": "Lucy", "lastName": "Rose" },
  },
  onShow: function() {
    console.log("show")
    app.get
  },
  changeme: function(e) {
    console.log(this.demoText)
    this.setData({
      demoText: 'MINA'
    })
  },
  formSubmit: function(e) {
    console.log(e.detail.value)
  },
  formReset: function(e) {
    console.log('reset事件')
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