import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Games.module.css";

import ImageGame from "@/assets/icons/plug.jpeg";
import { SearchGame } from "@/components/SearchGame/SearchGame";
import { useCategoriesQuery } from "@/entities/home/queries";
import {ButtonBack} from "@/components/ui/ButtonBack/ButtonBack";

export const Games = () => {
  const { t } = useTranslation();

  const { data: categories = [] } = useCategoriesQuery();

  const url = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);

  const category = categories.find((cat) => cat.id === url);

  const [showTimeout, setShowTimeout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTimeout(true);
    }, 300);
    return () => clearTimeout(timer);
  });

  // useEffect(() => {
  //   if (!category) {
  //     //window.location.replace(getLocalizedPath(lang, "/"));
  //     console.error(category)
  //   }
  // },[category]);

  useEffect(() => {
    console.error(categories);
  });

  const categoryName = category ? category.labelKey : "common.games";

  return (
    <>
      <ButtonBack to="/">{t(categoryName)}</ButtonBack>
      <SearchGame />

      {typeof category === "object"
        ? showTimeout && (
            <section className={styles.games__content}>
              <div className={styles.games__background}>
                <img className={styles.games__image} src={ImageGame} alt="" loading="lazy" />
                <div className={styles.games__item}>
                  <div className={styles["games__item-top"]}>
                    <p>The Longest Game Name Ever abababa</p>
                    <button></button>
                  </div>
                  <span>DEMO</span>
                </div>
              </div>
              <div className={styles.games__background}>
                <div className={styles.games__item}>
                  <div className={styles["games__item-top"]}>
                    <p>The Longest Game Name Ever abababa</p>
                    <button></button>
                  </div>
                </div>
              </div>
              <div className={styles.games__background}>
                <div className={styles.games__item}>
                  <div className={styles["games__item-top"]}>
                    <p>The Longest Game Name Ever abababa</p>
                    <button></button>
                  </div>
                  <span>DEMO</span>
                </div>
              </div>
              <div className={styles.games__background}>
                <div className={styles.games__item}>
                  <div className={styles["games__item-top"]}>
                    <p>The Longest Game Name Ever abababa</p>
                    <button></button>
                  </div>
                </div>
              </div>
              <div className={styles.games__background}>
                <div className={styles.games__item}>
                  <div className={styles["games__item-top"]}>
                    <p>The Longest Game Name Ever abababa</p>
                    <button></button>
                  </div>
                </div>
              </div>
              <div className={styles.games__background}>
                <div className={styles.games__item}>
                  <div className={styles["games__item-top"]}>
                    <p>The Longest Game Name Ever abababa</p>
                    <button></button>
                  </div>
                </div>
              </div>
              <div className={styles.games__background}>
                <div className={styles.games__item}>
                  <div className={styles["games__item-top"]}>
                    <p>The Longest Game Name Ever abababa</p>
                    <button></button>
                  </div>
                </div>
              </div>
              <div className={styles.games__background}>
                <div className={styles.games__item}>
                  <div className={styles["games__item-top"]}>
                    <p>The Longest Game Name Ever abababa</p>
                    <button></button>
                  </div>
                </div>
              </div>
              <div className={styles.games__background}>
                <div className={styles.games__item}>
                  <div className={styles["games__item-top"]}>
                    <p>The Longest Game Name Ever abababa</p>
                    <button></button>
                  </div>
                </div>
              </div>
              <div className={styles.games__background}>
                <div className={styles.games__item}>
                  <div className={styles["games__item-top"]}>
                    <p>The Longest Game Name Ever abababa</p>
                    <button></button>
                  </div>
                </div>
              </div>
              <div className={styles.games__background}>
                <div className={styles.games__item}>
                  <div className={styles["games__item-top"]}>
                    <p>The Longest Game Name Ever abababa</p>
                    <button></button>
                  </div>
                </div>
              </div>
            </section>
          )
        : showTimeout && <div className={styles.games__title}>{t("common.noGames")}</div>}
    </>
  );
};
