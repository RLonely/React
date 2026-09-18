import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./MainBanner.module.css";

import "swiper/css";
import { useMainBannersQuery } from "@/entities/home/queries";

export const MainBanner = () => {
  const { data: banners = [] } = useMainBannersQuery();

  return (
    <Swiper spaceBetween={6} slidesPerView={1} navigation className={styles.swiper__main}>
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div className={styles["swiper__main-image"]}>
            <img src={banner.image} alt={banner.alt} loading="lazy" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
