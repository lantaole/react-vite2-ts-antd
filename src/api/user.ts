import http from "../utils/http";
import {AxiosRequestConfig} from 'axios'
export const createUser  = () => {
  const config: any = {headers: { 'Cache-Control': 'no-cache' }}
  return http.get("/createUser", config);
};
