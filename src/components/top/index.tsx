import { FC, Fragment, useState, useRef, MutableRefObject } from "react";
import { useSelector, useDispatch } from 'react-redux'
import type { MenuProps } from 'antd';
import { Link, Outlet } from 'react-router-dom'
import { Button, Layout, Menu, Input, Space, Divider  } from "antd";
import styles from './index.module.less'
import Login from "@components/login";
import {RootState} from "@src/store";
const Top: React.FC = (props) => {
  const [current, setCurrent] = useState('mail');
  const { Search } = Input;
  const childrenRef = useRef(null) as any;
  const dispatch = useDispatch()
  const topBgColor = useSelector((state:RootState) => state.common.topBgColor);
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const items: MenuProps['items'] = [
    {
      label: '首页',
      key: 'mail',
    },
    {
      label: '书库',
      key: 'app',
    },
    {
      label: '排行版',
      key: 'SubMenu',
    },
    {
      label: '作家专区',
      key: 'alipay',
    },
    {
      label: '作家福利',
      key: 'workWelfare',
    },
  ];

  const onSearch = (value: string) => console.log(value)
  return (
    <>
      <div className={styles.muyeHeader} style={{backgroundColor: topBgColor}} >
        <div className={styles.muyeHeaderContent}>
          <Link className={styles.muyeHeaderLogo} to='/'></Link>
          <Menu className={styles.topMenuWrapper} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
          <div className={styles.muyeHeaderUser}>
            <Search placeholder="请输入书名或作者名" allowClear onSearch={onSearch} style={{width: 240}}  enterButton="搜索" />
            <div className="user-login ml-5">
              <Button type="text"
                      onClick={() => {
                childrenRef.current.showModal();
              }}
              >登录</Button>
              <Login ref={childrenRef} ></Login>
              <Divider type="vertical"/>
              <Button type="text">注册</Button>
            </div>
          </div>
        </div>

      </div>
      <Outlet></Outlet>
    </>
  );
};


export default Top;
