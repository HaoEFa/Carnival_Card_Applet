// components/khk-news-item/khk-news-item.js
import  { formatNum, formatTime } from "../../utils/common";
import { getNewsData } from "../../api/apis"

Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     console.log(properties);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log(properties);
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})

Component({
  properties: {
    item:{
      type:Object,
      value:{}
    }
  },
  data: {
    
  }
})