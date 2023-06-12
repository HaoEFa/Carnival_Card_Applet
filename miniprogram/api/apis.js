import { request } from "../utils/request"

// 请求导航数据api

export function listNav() {
  return request({
    url:"/nav/get",
    method:"POST"
  })
}


// 获取新闻列表
export function queryNewsData(data) {
  return request({
    url:"/news/get",
    method:"POST",
    data:data
    // es6中，data:data = data(属性值和名称一致时)
    
  })
}


// 获取新闻详情

export function newsDetail(data) {
  return request({
    url:"/news/detail",
    method:"POST",
    data
  })
}

// 获取产品列表

export function queryProduct(data) {
  return request({
    url:"/product/getlist",
    method:"POST",
    data
  })
}

// 获取产品详情

export function productDetail(data) {
  return request({
    url:"/product/detail",
    method:"POST",
    data
  })
}