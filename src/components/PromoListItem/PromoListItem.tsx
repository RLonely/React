import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

import styles from "./PromoListItem.module.css";

import Image from "@/assets/icons/plug.jpeg";
import { Likes } from "@/components/ui/Likes/Likes";
import { type Promo } from "@/entities/promo/types";
import { getLocalizedPath } from "@/i18n/routing";

export const PromoListItem = ({ item }: { item: Promo }) => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <Link
      to={getLocalizedPath(lang, `/promos/${item.slug}`)}
      style={{ textDecoration: "none" }}
      state={{ item: item }}
    >
      <div className={styles["promoListItem"]}>
        <img className={styles["promoListItem__image"]} src={Image} alt="Image" loading="lazy" />
        <div className={styles["promoListItem__top"]}>
          <div className={styles["promoListItem__left"]}>
            <div className={styles["promoListItem__status"]}>
              {item.status === "live" ? t("promoItem.live") : item.status}
            </div>
            <div className={styles["promoListItem__date"]}>{item.dueDate}</div>
          </div>
          <Likes likeCount={item.likeCount} />
        </div>
        <h2>{item.title}</h2>
        <span>{item.description}</span>
      </div>
    </Link>
  );
};
