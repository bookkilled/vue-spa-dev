/**
 * 接口请求API
 */
import reqwest from 'reqwest'

const setTimeout = 5000;
const domain = (process.env.DEV_ENV === 'production')
	? `${location.protocol}//m.leadfund.com.cn`
	: `${location.protocol}//m.leadfund.com.cn`
let mpubData = { //公共请求参数
		"terminal": "H5",
    "saleMercId": "LD",
    "reqTime": "Thu, 22 Dec 2016 06:25:57 GMT",
    "channelCode": "LD",
    "clientVersion": "3.6",
    "version": "1.0",
    "custId": localStorage.CUSTID || "",
    "token": localStorage.TOKEN || ""
}
// M站接口公共入参合并
export function mergeData(data) {
  return Object.assign({}, mpubData, data)
}
export function RSAmergeDate(data) {
  return LeadBase.encrypts(JSON.stringify(Object.assign({}, mpubData, data)))
}


// 获取产品列表
// export function getProducts(params) {
//   return reqwest({
//     url: `${domain}/finance/open/product/productList.do`,
//     method: 'GET',
//     type: 'jsonp',
//     timeout: setTimeout,
//     contentType: 'application/json;charset=utf-8',
//     data: params
//   })
// }
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

// 判断是否登录
export function isLogin() {
  return reqwest({
    url: `${domain}/front-gateway-web/isLogin.action`,
    method: 'GET',
    // type: 'json',
    timeout: setTimeout,
    contentType: 'application/json;charset=utf-8',
    data: mergeData()
  })
}
// 获取产品列表 /front-gateway-web/
export function getProducts(params) {
  return reqwest({
    url: `${domain}/front-gateway-web/queryMBrokInfoMesList.app`,
    method: 'GET',
    // type: 'json',
    timeout: setTimeout,
    contentType: 'application/json;charset=utf-8',
    data: { data: RSAmergeDate(params)}
  })
}

// 测试多数据
export function getPAList() {
  return reqwest({
    url: 'https://m.pingan.com/chaoshi/finance/open/product/productList.do',
    method: 'GET',
    type: 'jsonp',
    timeout: setTimeout,
    contentType: 'application/json;charset=utf-8',
    data: {
      pageStartNum: 0,
      pageEndNum: 100,
      productSide: '',
      secondLevelType: '10000006',
      tagCode: '',
      combinSort:''
    }
  })
}
