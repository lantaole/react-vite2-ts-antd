import React, { Suspense, lazy, Fragment } from 'react'
import {  Spin } from "antd";
import {  BrowserRouter as Router, HashRouter, useRoutes, Routes} from 'react-router-dom';
import routes from './routes'

// 渲染路由
function RouteElement() {
  const element = useRoutes(routes)
  return element
}
const App = () => {
  return (
    <Suspense fallback={<Spin />}>
      <Router>
        <RouteElement />
      </Router>
    </Suspense>
  );
};

export default App;
