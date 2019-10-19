// axios请求相关操作封装到这里
import axios from 'axios'
import jsonBig from 'json-bigint'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

/**
 * 处理后端返回数据中超出js安全整数范围问题
 */
request.defaults.transformResponse = [function (data) {
  // 保证id不失真，判断是否有返回数据，若有进行大数字处理，若没有返回个空对象，避免报错
  return data ? jsonBig.parse(data) : {}
}]

/**
 *请求拦截器
 */

/**
  * 响应拦截器
  */

export default request
// 导出这个请求兑现哪里需要发送请求，哪里就加载使用
