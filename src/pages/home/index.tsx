
import React, { useEffect, useState } from 'react';
import {  Button } from "antd";
import styles from './index.module.less'
import {createUser} from "../../api/user";
const Home =  () => {
  useEffect(() => {
    createUser().then(res => {
      console.log(res);
    })
  });

  return (
    <div className={styles["home-wrapper"]}>
      <h2>Home</h2>
      <Button type="primary">Primary Button</Button>
    </div>
  );
};
export default Home;
