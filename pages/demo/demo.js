const app = getApp()

var global_data = {
  name: 'wechat',
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