import "swiper/css/pagination";
import "swiper/css";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./SecondaryBanner.module.css";

import { useSecondaryBannersQuery } from "@/entities/home/queries";

export const SecondaryBanner = () => {
  const { data: banners = [] } = useSecondaryBannersQuery();

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={6}
      slidesPerView={1}
      navigation
      // pagination={{
      //     el: ".secondary-pagination",
      //     clickable: true
      // }}
      className={styles.swiper__secondary}
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div className={styles["swiper__main-image"]}>
            <img src={banner.image} alt={banner.alt} loading="lazy" />
          </div>
        </SwiperSlide>
      ))}
      {/*<div className="secondary-pagination"></div>*/}
    </Swiper>
  );
};
