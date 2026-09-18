import styles from "./AllTheTime.module.css";

import Avatar from "@/assets/icons/avatar.png";
import IconCoinDollar from "@/assets/icons/coin-dollar.svg";
import ImageGames from "@/assets/icons/plug.jpeg";
import {useTranslation} from "react-i18next";

export const AllTheTime = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={styles.fame__leaders}>
        <div className={styles.fame__leader}>
          <div className={styles["fame__leader-silver"]}>
            <img className={styles["fame__leader-image"]} src={Avatar} alt=""
                 loading="lazy"/>
            <p className={styles["fame__leader-id"]}>ID 88******9</p>
            <p className={styles["fame__leader-money"]}>99 999 999 UZS</p>
          </div>
        </div>
        <div className={styles.fame__leader}>
          <div className={styles["fame__leader-gold"]}>
            <img className={styles["fame__leader-image"]} src={Avatar} alt=""
                 loading="lazy"/>
            <p className={styles["fame__leader-id"]}>ID 99******9</p>
            <p className={styles["fame__leader-money"]}>99 999 999 UZS</p>
          </div>
        </div>
        <div className={styles.fame__leader}>
          <div className={styles["fame__leader-bronza"]}>
            <img className={styles["fame__leader-image"]} src={Avatar} alt=""
                 loading="lazy"/>
            <p className={styles["fame__leader-id"]}>ID 77******9</p>
            <p className={styles["fame__leader-money"]}>99 999 999 UZS</p>
          </div>
        </div>
      </section>

      <section className={styles.fame__content}>
        <div className={styles["fame__content-names"]}>
          <div className={styles["fame__names-left"]}>
            <div>#</div>
            <div>{t("games.user")}</div>
          </div>
          <div className={styles["fame__names-right"]}>
            <div>{t("profile.win")}</div>
            <div>{t("games.game")}</div>
          </div>
        </div>
        <div className={styles["fame__content-list"]}>
          <div className={styles["fame__content-item"]}>
            <div className={styles["fame__item-left"]}>
              <div className={`${styles["fame__item-num"]} ${styles["fame__num-gold"]}`}>1</div>
              <div className={styles["fame__item-user"]}>
                <img className={styles["fame__item-image"]} src={Avatar} alt=""
                     loading="lazy"/>
                ID 99******9
              </div>
            </div>
            <div className={styles["fame__item-right"]}>
              <div className={styles["fame__item-win"]}>
                999 999 999
                <img className={styles["fame__image-coin"]} src={IconCoinDollar}
                     alt="" loading="lazy"/>
              </div>
              <div>
                <img className={styles["fame__image-game"]} src={ImageGames}
                     alt="" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className={styles["fame__content-item"]}>
            <div className={styles["fame__item-left"]}>
              <div className={`${styles["fame__item-num"]} ${styles["fame__num-silver"]}`}>2</div>
              <div className={styles["fame__item-user"]}>
                <img className={styles["fame__item-image"]} src={Avatar} alt=""
                     loading="lazy"/>
                ID 99******9
              </div>
            </div>
            <div className={styles["fame__item-right"]}>
              <div className={styles["fame__item-win"]}>
                999 999 999
                <img className={styles["fame__image-coin"]} src={IconCoinDollar}
                     alt="" loading="lazy"/>
              </div>
              <div>
                <img className={styles["fame__image-game"]} src={ImageGames}
                     alt="" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className={styles["fame__content-item"]}>
            <div className={styles["fame__item-left"]}>
              <div className={`${styles["fame__item-num"]}  ${styles["fame__num-bronza"]}`}>3</div>
              <div className={styles["fame__item-user"]}>
                <img className={styles["fame__item-image"]} src={Avatar} alt=""
                     loading="lazy"/>
                ID 99******9
              </div>
            </div>
            <div className={styles["fame__item-right"]}>
              <div className={styles["fame__item-win"]}>
                9 999 999
                <img className={styles["fame__image-coin"]} src={IconCoinDollar}
                     alt="" loading="lazy"/>
              </div>
              <div>
                <img className={styles["fame__image-game"]} src={ImageGames}
                     alt="" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className={styles["fame__content-item"]}>
            <div className={styles["fame__item-left"]}>
              <div className={styles["fame__item-num"]}>4</div>
              <div className={styles["fame__item-user"]}>
                <img className={styles["fame__item-image"]} src={Avatar} alt=""
                     loading="lazy"/>
                ID 99******9
              </div>
            </div>
            <div className={styles["fame__item-right"]}>
              <div className={styles["fame__item-win"]}>
                999 999
                <img className={styles["fame__image-coin"]} src={IconCoinDollar}
                     alt="" loading="lazy"/>
              </div>
              <div>
                <img className={styles["fame__image-game"]} src={ImageGames}
                     alt="" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className={styles["fame__content-item"]}>
            <div className={styles["fame__item-left"]}>
              <div className={styles["fame__item-num"]}>5</div>
              <div className={styles["fame__item-user"]}>
                <img className={styles["fame__item-image"]} src={Avatar} alt=""
                     loading="lazy"/>
                ID 99******9
              </div>
            </div>
            <div className={styles["fame__item-right"]}>
              <div className={styles["fame__item-win"]}>
                999 999
                <img className={styles["fame__image-coin"]} src={IconCoinDollar}
                     alt="" loading="lazy"/>
              </div>
              <div>
                <img className={styles["fame__image-game"]} src={ImageGames}
                     alt="" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className={styles["fame__content-item"]}>
            <div className={styles["fame__item-left"]}>
              <div className={styles["fame__item-num"]}>6</div>
              <div className={styles["fame__item-user"]}>
                <img className={styles["fame__item-image"]} src={Avatar} alt=""
                     loading="lazy"/>
                ID 99******9
              </div>
            </div>
            <div className={styles["fame__item-right"]}>
              <div className={styles["fame__item-win"]}>
                9 999 999
                <img className={styles["fame__image-coin"]} src={IconCoinDollar}
                     alt="" loading="lazy"/>
              </div>
              <div>
                <img className={styles["fame__image-game"]} src={ImageGames}
                     alt="" loading="lazy"/>
              </div>
            </div>
          </div>
          <div className={styles["fame__content-item"]}>
            <div className={styles["fame__item-left"]}>
              <div className={styles["fame__item-num"]}>7</div>
              <div className={styles["fame__item-user"]}>
                <img className={styles["fame__item-image"]} src={Avatar} alt=""
                     loading="lazy"/>
                ID 99******9
              </div>
            </div>
            <div className={styles["fame__item-right"]}>
              <div className={styles["fame__item-win"]}>
                9 999 999
                <img className={styles["fame__image-coin"]} src={IconCoinDollar}
                     alt="" loading="lazy"/>
              </div>
              <div>
                <img className={styles["fame__image-game"]} src={ImageGames}
                     alt="" loading="lazy"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
