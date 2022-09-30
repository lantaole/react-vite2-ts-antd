import React, { useEffect, useState } from 'react';
import {  Button, Carousel } from "antd";
import styles from './index.module.less'
import banner1 from "./assets/01.png"
import banner2 from "./assets/02.png"
import banner3 from "./assets/03.png"
import banner4 from "./assets/04.png"
import {getBannerList} from "@api/home";
import {BannerType} from "@pages/home/interface";
const Home =  () => {
  const [banners, setBanners] = useState<Array<BannerType>>([]);
  useEffect(() => {
    getBannerList().then(res => {
      setBanners(res.data);
    })
  },[]);
  return (
    <div className={styles.homeWrapper}>
      <Carousel autoplay effect="fade">{
        banners.map((item, index) => {
          return (
            <div   key={index}>
              <div className={styles.bannerItem}  style={item.css} >
                <img  src={item.imgUrl} />
              </div>
            </div>
          )
        })
      }
      </Carousel>
    </div>
  );
};
export default Home;
