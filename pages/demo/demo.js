const app = getApp()

Page({
  data: {
    hideModal: true, //模态框的状态  true-隐藏  false-显示
    isScroll: true,
    animationData: {},//

    buyCount: 1,
    selectedAttrsDesc: '',
    selectedAttrIndexs: [],

    productInfo: {
      imageUrl: '',
      price: '200.01',
      attrs: [
        {
          title: '颜色',
          values: 
          [
            {
              'name': '黑色',
            }, 
            {
              'name': '白色',
            }
          ]
        },
        {
          title: '尺码',
          values:
            [
              {
                'name': '39',
              },
              {
                'name': '40',
              },
              {
                'name': '41',
              },
              {
                'name': '42',
              },
              {
                'name': '43',
              },
              {
                'name': '44',
              }
            ]
        }
      ]
    }
  },

  tappOnAttrItem: function(e) {
    console.log(e)
    var attrModel = e.target.dataset.attrtypemodel
    var attrIndex = e.target.dataset.attrtypeindex
    var attrItemModel = e.target.dataset.attritemvalue
    var attrItemIndex = e.target.dataset.attritemindex

    // 更新已选规格
    var specs = ''
    var attrs = this.data.productInfo.attrs;
    for (var i = 0; i < attrs.length; i++) {
      if (i == attrIndex) {
        specs += attrs[i].values[attrItemIndex].name + '、'
      } else {
        var index = this.data.selectedAttrIndexs[i];
        specs += attrs[i].values[index].name + '、'
      }
    }
    specs = specs.substr(0, specs.length - 1)

    this.setData({
      ['selectedAttrIndexs[' + attrIndex + ']']: attrItemIndex,
      selectedAttrsDesc: specs
    })

    console.log(this.data.selectedAttrIndexs)
  },

  decreaseCount: function () {
    var count = this.data.buyCount
    if (count > 1) {
      count -= 1
      this.setData({
        buyCount: count
      })
    }
  },
  increaseCount: function () {
    var count = this.data.buyCount
    if (count < 20) {
      count += 1
      this.setData({
        buyCount: count
      })
    }
  },

  // 显示遮罩层
  showModal: function () {
    var that = this;
    that.setData({
      hideModal: false,
      isScroll: false
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
        hideModal: true,
        isScroll: true
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

  onReady: function() {
    console.log(this.data.productInfo)

    if (this.data.selectedAttrIndexs.length == 0) {
      var indexs = []
    }

    var specs = ''

    var attrs = this.data.productInfo.attrs;
    for (var i = 0; i < attrs.length; i++) {
      indexs.push(0)
      specs += attrs[i].values[0].name + '、'
    }
    specs = specs.substr(0, specs.length - 1)

    this.setData({
      selectedAttrIndexs: indexs,
      selectedAttrsDesc: specs
    })
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