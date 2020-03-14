
export default function request(options){
  wx.showLoading({
    title: '加载中',
  })
       return new Promise((resolve,rejects) =>{
            wx.request({
              url: options.url,
              method:options.method || 'GET',
               data:options.data,
               success:(res) =>{
                  resolve(res)
               },
              fail:(req)=>{
                rejects(req)
              },
              complete:()=>{
                wx.hideLoading()
              }
            })
       })
}