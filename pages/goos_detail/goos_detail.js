// pages/goos_detail/goos_detail.js
import request from "../../request/request.js"
import regeneratorRuntime from "../../lib/runtime/runtime.js"
Page({
  /**
   * 页面的初始数据
   */
  data: {
      goods_id:"",
      piclist:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        goods_id:options.goods_id
      })
      this.getCate()
  },

  async getCate(){
    let res = await request({
       url:"https://api.zbztb.cn/api/public/v1/goods/detail?goods_id="   
       +this.data.goods_id
    })
    this.setData({
      piclist:res.data.message  
    })
    console.log(res)
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