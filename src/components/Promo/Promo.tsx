import "swiper/css/pagination";
import "swiper/css";

import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Promo.module.css";

import dimondPurpul from "@/assets/icons/dimondPurpul.svg";
import { usePromoSlidesQuery } from "@/entities/home/queries";
import { getLocalizedPath } from "@/i18n/routing";

export const Promo = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const { data: promoSlides = [], isLoading, isError } = usePromoSlidesQuery();

  return (
    <div className={styles.promo}>
      <div className={styles.promo__top}>
        <div className={styles.promo__title}>
          <img src={dimondPurpul} alt="dimondPurpul" loading="lazy" />
          <div>{t("sections.promo")}</div>
        </div>
        <div className={styles.promo__right}>
          <Link className={styles.promo__all} to={getLocalizedPath(lang, "/promos")}>
            {t("common.viewAll")}
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.650024 0.649902L4.65002 4.6499L0.650024 8.6499"
                stroke="#7B43FF"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className={styles.promo__content}>
        {isLoading && <div>{t("common.loading")}</div>}
        {isError && <div>{t("common.requestFailed")}</div>}
        {!isLoading && !isError && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            className={styles.swiper__secondary}
          >
            {promoSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <a className={styles.promo__item} href={slide.href}>
                  <img src={slide.image} alt={slide.alt} loading="lazy" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};
