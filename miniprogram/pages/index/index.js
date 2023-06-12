import  { formatNum, formatTime } from "../../utils/common";
import { listNav, queryNewsData } from "../../api/apis"
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    navArr:[],
    newsArr:[]
  },
// 网络请求
  onLoad(options) {
     this.getNavData(),
     this.getNewData()
  },


// 获取接口数据
getNavData() {
   listNav().then(res => {
    //  console.log(res);
     this.setData({
         navArr:res.data
     })
   })
  // wx.request({
  //   url: 'https://tea.qingnian8.com/nav/get',
  //   header:{
  //     "Content-Type":"application/json"
  //   },
  //   method:"POST",
  //   success:res=> {
  //       console.log(res);
  //       this.setData({
  //          navArr:res.data.data
  //       })
  //     }
  //   })

},

// 获取新闻列表
getNewData() {
  queryNewsData({
    limit:3,
    hot:true
  }).then(res => {
        res.data.forEach(item => {
        item.view_count = formatNum(item.view_count)
        item.publish_date = formatTime(item.publish_date, 5)
   });
     this.setData({
       newsArr:res.data
    })
  })
  // wx.request({
  //   url: 'https://tea.qingnian8.com/news/get',
  //   header:{
  //     "Content-Type":"application/json"
  //   },
  //   data:{
  //     limit:3,
  //     hot:true
  //    },
  //   method:"POST",
  //   success:res=> {
  //     res.data.data.forEach(item => {
  //       item.view_count = formatNum(item.view_count)
  //       item.publish_date = formatTime(item.publish_date, 6)
  //   });
  //     this.setData({
  //       newsArr:res.data.data
  //    })
  //   }
  // })
}

});
