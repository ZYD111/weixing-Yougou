// pages/category/category.js
import request from "../../request/request.js";
import regeneratorRuntime from "../../lib/runtime/runtime.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
      leftMenulist:[],
      rightContent:[],    
      items:"大家电",
      index:0
  },
handleitemClick(e){
  
 this.setData({
   items:e.currentTarget.dataset.item,
   index:e.currentTarget.dataset.index
 })
 this.getCates()
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getCates()
  },
 async getCates(){
  // request({
  //   url:"https://api.zbztb.cn/api/public/v1/categories",
  // }).then(res=>{
    
  //   let leftMenulist = res.data.message.map(a=>{
  //     return a.cat_name
  //   })
  //   let rightContent = res.data.message[this.data.index].children
  //   this.setData({
  //     leftMenulist,
  //     rightContent
  //   })
  // })
let res = await request({url:"https://api.zbztb.cn/api/public/v1/categories"})
let leftMenulist = res.data.message.map(a=>{
      return a.cat_name  
    })
    let rightContent = res.data.message[this.data.index].children
    this.setData({
      leftMenulist,
      rightContent
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