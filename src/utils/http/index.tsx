import Http from "./core";
import {AxiosRequestConfig} from 'axios'
const config:AxiosRequestConfig = {
  baseURL:'/api',//按照自己的来写
  timeout:10000//响应超时
}
export default new Http(config) //创建实例对象
