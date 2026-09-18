import styles from "./DailyEntry.module.css";

import IconCalendar from "@/assets/icons/calendar-big.svg";
import IconLock from "@/assets/icons/lock-round.svg";
import IconCheck from "@/assets/icons/check-round.svg";
import IconTime from "@/assets/icons/time-round.svg";
import IconLockPurpul from "@/assets/icons/lock-round-purpul.svg";
import {useTranslation} from "react-i18next";

export const DailyEntry = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.daily__items}>
        <div className={styles["daily__item-steps"]}>
          <img src={IconCalendar} alt="" loading="lazy"/>
          <div className={styles["daily__steps-text"]}>
            <div className={styles["daily__steps-title"]}>{t("daily.title")}</div>
            <div className={styles["daily__steps-desc"]}>
              {t("daily.description")}
            </div>
          </div>
        </div>

        <section className={styles.daily__steps}>
          <div className={styles.daily__points}>
            <div className={styles.daily__step}>
              <div className={styles.daily__circle}>
                <div className={styles.daily__dot}></div>
              </div>
            </div>
            <div className={styles.daily__step}>
              <div className={styles.daily__circle}>
                <div className={styles["daily__dot-green"]}></div>
              </div>
            </div>
            <div className={styles.daily__step}>
              <div className={styles.daily__circle}></div>
            </div>
            <div className={styles.daily__step}>
              <div className={styles.daily__circle}></div>
            </div>
            <div className={styles.daily__step}>
              <div className={styles.daily__circle}></div>
            </div>
            <div className={styles.daily__step}>
              <div className={styles.daily__circle}></div>
            </div>
            <div className={styles.daily__step}>
              <div className={styles.daily__circle}></div>
            </div>
          </div>
          <div className={styles.daily__content}>
            <div className={`${styles.daily__item} ${styles["daily__item-lock"]}`}>
              <div className={styles["daily__item-row"]}>
                <img src={IconLock} alt="" loading="lazy"/>
                <div className={styles["daily__item-text"]}>
                  <div className={`${styles["daily__item-title"]} ${styles["lock-title"]}`}>
                    {t("daily.day")} 1
                  </div>
                  <div className={`${styles["daily__item-desc"]} ${styles["lock-desc"]}`}>
                    {t("tasks.rewardReceived")}
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles["daily__item"]} ${styles.daily__done}`}>
              <div className={styles["daily__item-row"]}>
                <img src={IconCheck} alt="" loading="lazy"/>
                <div className={styles["daily__item-text"]}>
                  <div className={styles["daily__item-title"]}>
                    {t("daily.day")} 2
                  </div>
                  <div className={styles["daily__item-desc"]}>
                    <div className={styles["daily__item-img"]}>

                    </div>
                    Lorem ipsum dolor
                  </div>
                </div>
              </div>
              <button className={styles["daily__done-btn"]}>
                {t("tasks.get")}
              </button>
            </div>
            <div className={styles.daily__item}>
              <div className={styles["daily__item-row"]}>
                <img src={IconTime} alt="" loading="lazy"/>
                <div className={styles["daily__item-text"]}>
                  <div className={styles["daily__item-title"]}>
                    {t("daily.day")} 3
                  </div>
                  <div className={styles["daily__item-time"]}>
                    {t("daily.getIn")}: <span className={styles["daily__time-span"]}>23:59:59</span>
                  </div>
                  <div className={styles["daily__item-desc"]}>
                    <div className={styles["daily__item-img"]}>

                    </div>
                    Lorem ipsum dolor
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.daily__item}>
              <div className={styles["daily__item-row"]}>
                <img src={IconLockPurpul} alt="" loading="lazy"/>
                <div className={styles["daily__item-text"]}>
                  <div className={styles["daily__item-title"]}>
                    {t("daily.day")} 4
                  </div>
                  <div className={styles["daily__item-desc"]}>
                    <div className={styles["daily__item-img"]}>

                    </div>
                    Lorem ipsum dolor
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.daily__item}>
              <div className={styles["daily__item-row"]}>
                <img src={IconLockPurpul} alt="" loading="lazy"/>
                <div className={styles["daily__item-text"]}>
                  <div className={styles["daily__item-title"]}>
                    {t("daily.day")} 5
                  </div>
                  <div className={styles["daily__item-desc"]}>
                    <div className={styles["daily__item-img"]}>

                    </div>
                    Lorem ipsum dolor
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.daily__item}>
              <div className={styles["daily__item-row"]}>
                <img src={IconLockPurpul} alt="" loading="lazy"/>
                <div className={styles["daily__item-text"]}>
                  <div className={styles["daily__item-title"]}>
                    {t("daily.day")} 6
                  </div>
                  <div className={styles["daily__item-desc"]}>
                    <div className={styles["daily__item-img"]}>

                    </div>
                    Lorem ipsum dolor
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.daily__item}>
              <div className={styles["daily__item-row"]}>
                <img src={IconLockPurpul} alt="" loading="lazy"/>
                <div className={styles["daily__item-text"]}>
                  <div className={styles["daily__item-title"]}>
                    {t("daily.day")} 7
                  </div>
                  <div className={styles["daily__item-desc"]}>
                    <div className={styles["daily__item-img"]}>

                    </div>
                    Lorem ipsum dolor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
