const app = getApp()

Page({
  data:{
    demoText:'demoText'
  },
  formSubmit: function(e) {
    console.log(e.detail.value)
  },
})