import http from "../utils/http";
import {BannerType} from "@pages/home/interface";

export const getBannerList  = () => {
  const config: any = {headers: { 'Cache-Control': 'no-cache' }}
  return http.get<Array<BannerType>>("/getBannerList", config);
};
