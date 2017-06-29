/**
 * 接口请求API
 */
import reqwest from 'reqwest'
import _ from 'lodash'


const setTimeout = 5000;
const domain = (process.env.DEV_ENV === 'production')
	? `${location.protocol}//m.pingan.com/chaoshi`
	: `${location.protocol}//m.pingan.com/chaoshi`

// 获取产品列表
export function getProducts(params) {
  return reqwest({
    url: `${domain}/finance/open/product/productList.do`,
    method: 'GET',
    type: 'jsonp',
    timeout: setTimeout,
    contentType: 'application/json;charset=utf-8',
    data: params
  })
}
// 获取产品详情
export function getProductDetail(productid) {
  return reqwest({
    url: `${domain}/finance/open/product/productInfo.do`,
    method: 'GET',
    type: 'jsonp',
    timeout: setTimeout,
    contentType: 'application/json;charset=utf-8',
    data: {
      productId: productid
    }
  })
}
