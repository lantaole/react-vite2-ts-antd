
import axios from 'axios'
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios'
import { IResponseData, codeMessage } from './types';
import {successMessage,errorMessage} from '../messageTips'

class Http {
  private service: AxiosInstance
  //    构造器
  constructor(config: AxiosRequestConfig) {
    //    创造实例
    this.service = axios.create(config)
    // 首先配置响应拦截
    this.service.interceptors.request.use((config: AxiosRequestConfig) => {
      /**
       * 实现自己的业务逻辑
       * 1.开启全屏加载动画之类
       * 2.数据加密config。data
       * 3.给请求头添加信息等（token 结合sessionStorage，localStorage,vuex这些）
       *
       */
      return config

    }, error => {

      /* 请求错误的业务逻辑
       1. 关闭全屏loading动画
       2. 重定向到错误页
     */
      return Promise.reject(error)// 为了可以在代码中catch到错误信息
    })//end request.use

    this.service.interceptors.response.use((response: AxiosResponse) => {
      /*
    1. 关闭全屏loading动画
    2. 数据解密
    3. 根据 response.data.code 做不同的错误处理
    4. ……
    */
      const data = response.data
      const { code } = data//解构赋值
      if (code !== '000000' && code !== 200) {
        // 这里面处理事务这些，发出警告等
        errorMessage(codeMessage[code])
      }
      return response.data
    }, error => {
      return Promise.reject(error)
    })//end response.use
  } //end constructor

// get<T>这个T 是对应后面返回数值data   Promise<IResponseData<T>>  里面的T
  public get<T>(url: string, params?: any): Promise<IResponseData<T>> {
    return this.service.get(url, params)
  }

  public post<T>(url: string, params: any,): Promise<IResponseData<T>> {
    return this.service.post(url, params)
  }

  public request<T>(method: Method, url: string, data?: any): Promise<IResponseData<T>> {
    return this.service.request({ method, url, data })
  }
}
export default Http
