// pages/goods_list/goods_list.js
import request from "../../request/request.js"
import regeneratorRuntime from "../../lib/runtime/runtime.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
     shopList:[],
     total:""
  },
  QueryParams:{
    query:"",
    cid:"5",
    pagenum:1,
    pagesize:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.QueryParams.cid=options.cate_id
      this.getCates()
  },
async getCates(){
  let res = await request({
    url:"https://api.zbztb.cn/api/public/v1/goods/search",
    data:{cid:this.QueryParams.cid,pagenum:this.QueryParams.pagenum,pagesize:this.QueryParams.pagesize}
  })
 this.setData({
   shopList:[...this.data.shopList,...res.data.message.goods],
   total:res.data.message.total
 })
},
onReachBottom(){
   let pag = Math.ceil(this.data.total/this.QueryParams.pagesize)
   if(this.QueryParams.pagenum>=pag){
      console.log('到底没有数据了')
   }else{
         this.QueryParams.pagenum++
        this.getCates()
   }
  
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
 

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})