import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import styles from "./PromoItem.module.css";

import Image from "@/assets/icons/plug.jpeg";
import { Likes } from "@/components/ui/Likes/Likes";
import { usePromoQuery } from "@/entities/promo/queries";
import {ButtonBack} from "@/components/ui/ButtonBack/ButtonBack";

export const PromoItem = () => {
  const { t } = useTranslation();
  const { promoId } = useParams();
  const { data: item, isLoading, isError } = usePromoQuery(promoId ?? "");

  if (isLoading) {
    return <div className={styles["PromoItem__container"]}>{t("common.loading")}</div>;
  }

  if (isError) {
    return <div className={styles["PromoItem__container"]}>{t("common.requestFailed")}</div>;
  }

  if (!item) {
    return <div className={styles["PromoItem__container"]}>{t("common.notFound")}</div>;
  }

  return (
    <div className={styles["PromoItem__container"]}>
      <ButtonBack to="../promos">{item.title}</ButtonBack>

      <div className={styles["PromoItem"]}>
        <img className={styles["PromoItem__image"]} src={Image} alt="Image" loading="lazy" />
        <div className={styles["PromoItem__top"]}>
          <div className={styles["PromoItem__left"]}>
            <div className={styles["PromoItem__status"]}>
              {item.status === "live" ? t("promoItem.live") : item.status}
            </div>
            <div className={styles["PromoItem__date"]}>{item.dueDate}</div>
          </div>
          <Likes likeCount={item.likeCount} />
        </div>
        <div className={styles["PromoItem__text"]}>
          <h2>{item.title}</h2>
          <span>{item.description}</span>
        </div>
      </div>
      <div className={styles["PromoItem__bottom"]}>
        <div className={styles["PromoItem__bottom-title"]}>{t("promoItem.title")}</div>
        <div className={styles["PromoItem__bottom-description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis massa vitae elit
          vulputate luctus. Proin vitae molestie leo. Quisque molestie, odio hendrerit suscipit
          dapibus, velit leo posuere massa, at tempus sem ligula a velit. Donec nec hendrerit ipsum,
          condimentum gravida lorem. Suspendisse sem ante, pellentesque eget eleifend nec, vulputate
          ac augue. Ut rutrum neque a nisl volutpat, ultricies gravida massa elementum. Suspendisse
          dictum euismod odio, ut euismod mi efficitur non. Donec mollis pretium dui, sit amet
          rutrum orci aliquam ac. Sed urna nisl, convallis at blandit at, cursus in libero.
        </div>
      </div>
    </div>
  );
};
