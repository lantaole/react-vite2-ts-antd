import { MockMethod } from 'vite-plugin-mock';
// 单纯的使⽤⾃⼰的返回数据话，可以不⽤引⼊mockjs
// http://mockjs.com/examples.html
// @ts-ignore
import Mock, { Random } from "mockjs";
import banner1 from "@pages/home/assets/01.png";
import banner2 from "@pages/home/assets/02.png";
import banner3 from "@pages/home/assets/03.png";
import banner4 from "@pages/home/assets/04.png";
export default [
  {
    url: '/api/getBannerList',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: Mock.mock([
          {
            css: {backgroundColor: 'rgb(251, 240, 229)'},
            imgUrl: '/src/pages/home/assets/01.png',
          },
          {
            css: {backgroundColor: 'rgb(236, 211, 181)'},
            imgUrl: '/src/pages/home/assets/02.png',
          },
          {
            css: {backgroundColor: 'rgb(231, 191, 96)'},
            imgUrl: '/src/pages/home/assets/03.png',
          },
          {
            css: {backgroundColor: 'rgb(252, 225, 234)'},
            imgUrl: '/src/pages/home/assets/04.png',
          }
        ])
      };
    }
  }
] as MockMethod[];
