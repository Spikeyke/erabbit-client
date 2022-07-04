// 订单相关的API函数
import request from '@/utils/request'

// 结算页面-生成订单
export const createOrder = () => {
  return request('/member/order/pre', 'get')
}

/* 
  添加收货地址
  @param {Object} form 参考接口文档
*/
// 添加收货地址
export const addAddress = form => {
  return request('/member/address', 'post', form)
}

/* 
  修改收货地址
*/
export const editAddress = form => {
  return request(`/member/address/${form.id}`, 'put', form)
}

/* 
  提交订单
  @param {Object} params 参考接口文档
  @returns
*/
export const submitOrder = params => {
  return request('/member/order', 'post', params)
}

/* 
  获取订单详情
  @param {String} orderId 订单ID
  @returns
*/
export const findOrderDetail = orderId => {
  return request('/member/order/' + orderId, 'get')
}

/* 
  获取订单列表
  @param {String} page 页码
  @param {String} pageSize 每页条数
  @param {String} orderState 订单状态 1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消，未传该参数或0为全部
  @returns
*/
export const findOrderList = ({ page = 1, pageSize = 10, orderState = 0 }) => {
  return request('/member/order', 'get', { page, pageSize, orderState })
}
