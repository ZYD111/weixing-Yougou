// pages/index/index.js
import request from "../../request/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
      swiperList:[],
      cateList:[],
      floorList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //轮播图
      request({
        url:"https://api.zbztb.cn/api/public/v1/home/swiperdata"
      }).then((res) =>{
        this.setData({
          swiperList:res.data.message
        })
      })
      //导航
      request({
        url:"https://api.zbztb.cn/api/public/v1/home/catitems",
      }).then(res =>{
        this.setData({
          cateList:res.data.message
        })
      })
      request({
        url:"https://api.zbztb.cn/api/public/v1/home/floordata",
      }).then(res =>{
        this.setData({
           floorList:res.data.message
        })
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