import React, { Suspense, lazy } from 'react'
import { Navigate } from "react-router-dom";
const  Home = lazy(() => import('@pages/home'))

export interface IRouteConfig {
  // 路由路径
  path: string;
  // 路由组件
  component?: any;
  // 302 跳转
  redirect?: string;
  exact?: boolean;
  // 路由信息
  title?: string;
  icon?: string;
  // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
  auth?: boolean;
  children?: IRouteConfig[];
  element: any;
}

const routes: IRouteConfig[] = [
  {
    title: '首页',
    path: 'home',
    element: <Home/>
  },
  {
    title: '首页',
    path: '*',
    element: <Navigate to="/home" />
  },
];

export default routes;
