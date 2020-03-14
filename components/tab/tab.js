// components/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
count:0,
titles:['综合','销量','价格']
  },

  /**
   * 组件的方法列表
   */
  methods: {
  handletabClick(e){
  this.setData({
    count:e.currentTarget.dataset.index
  })
  }
  }
})
