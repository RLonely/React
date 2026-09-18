import {useState, useRef, useEffect} from "react";
import { useTranslation } from "react-i18next";
import styles from "./HeaderAuthorized.module.css";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import CoinPaw from "@/assets/icons/coin-paw.svg";
import Close from "@/assets/icons/close-transparent.svg";
import CoinUZS from "@/assets/icons/uzs-coin.svg";
import type { AuthSession } from "@/entities/auth/types";
import {Link, useLocation, useParams} from "react-router-dom";
import {getLocalizedPath} from "@/i18n/routing";

type HeaderAuthorizedProps = {
  session: AuthSession;
};

export const HeaderAuthorized = ({ session }: HeaderAuthorizedProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const location = useLocation();
  const { lang } = useParams();

  console.log(location);

  const isReplenishPage = location.pathname === `/${lang}/wallet`;

  console.log(isReplenishPage);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div ref={popupRef} className={styles["header__right-block"]}>
        <div className={styles.header__money}>
          <div
            className={`${styles["header__money-left"]} ${isOpen ? styles.active : ""}`}
            onClick={toggle}
          >
            {session.balances.main.amount.toFixed(2)}
            <span>{session.balances.main.currency}</span>
            <img
              className={styles["header__money-icon"]}
              src={ArrowDown}
              alt="Bell"
              loading="lazy"
            />
          </div>
          {isReplenishPage ? <Link className={styles["header__money-add"]} to={'/'}><img src={Close} alt="CloseIcon" /></Link> :
            <Link to={getLocalizedPath(lang, `/wallet`)} className={styles["header__money-add"]}>
              {t("wallet.topUp")}
            </Link>
          }
        </div>
      </div>

      {isOpen && (
        <div className={styles.balance__popup}>
          <div className={styles["balance__popup-item"]}>
            <img src={CoinUZS} alt="UZS" />
            <div className={styles["balance__popup-text"]}>
              <div className={styles["balance__popup-title"]}>{t("header.mainBalance")}</div>
              <div className={styles["balance__popup-coins"]}>
                {session.balances.main.amount.toFixed(2)} {session.balances.main.currency}
              </div>
            </div>
          </div>
          <div className={styles["balance__popup-item"]}>
            <img src={CoinUZS} alt="UZS" />
            <div className={styles["balance__popup-text"]}>
              <div className={styles["balance__popup-title"]}>{t("header.bonusBalance")}</div>
              <div className={styles["balance__popup-coins"]}>
                {session.balances.bonus.amount.toFixed(2)} {session.balances.bonus.currency}
              </div>
            </div>
          </div>
          <div className={styles["balance__popup-item"]}>
            <img src={CoinPaw} alt="Paw" />
            <div className={styles["balance__popup-text"]}>
              <div className={styles["balance__popup-title"]}>{t("header.coins")}</div>
              <div className={styles["balance__popup-coins"]}>{session.balances.coins} PC</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
