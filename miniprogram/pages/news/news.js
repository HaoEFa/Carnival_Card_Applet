// pages/news/news.js
import  { formatNum, formatTime } from "../../utils/common"
import {  queryNewsData } from "../../api/apis"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsArr:[],
    loading:false,
    isData:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getNewData()
  },

  // 获取新闻列表
  getNewData(size=0) {
    console.log(1);
    this.setData({
      loading:true
    })
    queryNewsData({
      limit:8,
      size
    }).then(res => {
      res.data.forEach(item => {
        item.view_count = formatNum(item.view_count)
        item.publish_date = formatTime(item.publish_date, 5)
   });
   let oldData = this.data.newsArr
   let newData = [...oldData, ...res.data]
   wx.stopPullDownRefresh()
   //  let newData = oldData.concat(res.data) 
     this.setData({
       newsArr:newData,
       loading:false
    })
    if (this.data.newsArr.length == res.total) {
       this.setData({
          isData:true
       })
    }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 下拉刷新效果
    // 设置下拉完毕，弹回效果
    // 但是每回下拉都会给newsArr添加重复的数据，如何解决这一问题？
    // 使用 this.setData({}）清空数据
    this.setData({
       newsArr:[],
       isData:false,
       loading:false
    })
    this.getNewData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 网络节流
      if (this.data.isData) return
      this.getNewData(this.data.newsArr.length)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})