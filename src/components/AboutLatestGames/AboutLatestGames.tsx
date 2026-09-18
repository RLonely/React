import styles from './AboutLatestGames.module.css';
import {useTranslation} from "react-i18next";

export const AboutLatestGames = () => {
  const { t } = useTranslation();

  return (
    <div className={`${styles["about__tab-content"]} ${styles.active}`}>
      <div className={styles.about__item}>
        <time className={styles["about__item-date"]} dateTime="2026-8-10">10 Август, 2025</time>
        <div className={styles["about__last-game"]}>
          <div className={styles["last-game__left"]}>
            <div className={styles["last-game__left-image"]}></div>
            <div className={styles["last-game__left-text"]}>
              <div className={styles["last-game__title"]}>Game Name</div>
              <div className={styles["last-game__name"]}>Provider Name</div>
            </div>
          </div>
          <div className={styles["last-game__right"]}>
            <div className={styles["last-game__check"]}>100 000 UZS</div>
            <div className={styles["last-game__status"]}>{t("profile.quantity")}</div>
          </div>
        </div>
        <div className={styles["about__last-game"]}>
          <div className={styles["last-game__left"]}>
            <div className={styles["last-game__left-image"]}></div>
            <div className={styles["last-game__left-text"]}>
              <div className={styles["last-game__title"]}>Game Name</div>
              <div className={styles["last-game__name"]}>Provider Name</div>
            </div>
          </div>
          <div className={styles["last-game__right"]}>
            <div className={styles["last-game__check"]}>10 000 UZS</div>
            <div className={styles["last-game__status"]}>{t("profile.bet")}</div>
          </div>
        </div>
        <div className={styles["about__last-game"]}>
          <div className={styles["last-game__left"]}>
            <div className={styles["last-game__left-image"]}></div>
            <div className={styles["last-game__left-text"]}>
              <div className={styles["last-game__title"]}>Game Name</div>
              <div className={styles["last-game__name"]}>Provider Name</div>
            </div>
          </div>
          <div className={styles["last-game__right"]}>
            <div className={styles["last-game__check"]}>8 000 UZS</div>
            <div className={styles["last-game__status"]}>{t("profile.refund")}</div>
          </div>
        </div>
        <div className={styles["about__last-game"]}>
          <div className={styles["last-game__left"]}>
            <div className={styles["last-game__left-image"]}></div>
            <div className={styles["last-game__left-text"]}>
              <div className={styles["last-game__title"]}>Incredibly long name of a game</div>
              <div className={styles["last-game__name"]}>Provider Name</div>
            </div>
          </div>
          <div className={styles["last-game__right"]}>
            <div className={styles["last-game__check"]}>99 000 000 UZS</div>
            <div className={styles["last-game__status"]}>{t("profile.win")}</div>
          </div>
        </div>
      </div>
      <div className={styles.about__item}>
        <time className={styles["about__item-date"]} dateTime="2026-8-10">9 Август, 2025</time>
        <div className={styles["about__last-game"]}>
          <div className={styles["last-game__left"]}>
            <div className={styles["last-game__left-image"]}></div>
            <div className={styles["last-game__left-text"]}>
              <div className={styles["last-game__title"]}>Game Name</div>
              <div className={styles["last-game__name"]}>Provider Name</div>
            </div>
          </div>
          <div className={styles["last-game__right"]}>
            <div className={styles["last-game__check"]}>-8 000 UZS</div>
            <div className={styles["last-game__status"]}>{t("profile.quantity")}</div>
          </div>
        </div>
        <div className={styles["about__last-game"]}>
          <div className={styles["last-game__left"]}>
            <div className={styles["last-game__left-image"]}></div>
            <div className={styles["last-game__left-text"]}>
              <div className={styles["last-game__title"]}>Incredibly long name of a game</div>
              <div className={styles["last-game__name"]}>Provider Name</div>
            </div>
          </div>
          <div className={styles["last-game__right"]}>
            <div className={styles["last-game__check"]}>99 000 000 UZS</div>
            <div className={styles["last-game__status"]}>{t("profile.quantity")}</div>
          </div>
        </div>
      </div>
      <div className={styles.about__item}>
        <time className={styles["about__item-date"]} dateTime="2026-8-10">9 Август, 2025</time>
        <div className={styles["about__last-game"]}>
          <div className={styles["last-game__left"]}>
            <div className={styles["last-game__left-image"]}></div>
            <div className={styles["last-game__left-text"]}>
              <div className={styles["last-game__title"]}>Game Name</div>
              <div className={styles["last-game__name"]}>Provider Name</div>
            </div>
          </div>
          <div className={styles["last-game__right"]}>
            <div className={styles["last-game__check"]}>-8 000 UZS</div>
            <div className={styles["last-game__status"]}>{t("profile.quantity")}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
