import React, { useRef, RefObject } from "react";

import CloseModal from "../../../assets/icons/close-transparent.svg";
import Find from "../../../assets/icons/find-glass.svg";
import Setting from "../../../assets/icons/setting-purple.svg";
import { UseClickOutside } from "../../Hooks/ClickOutside/UseClickOutside";

import styles from "./Modal.module.css";

export const Modal = ({
  open,
  setOpen,
  excludeRefs = [],
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  excludeRefs?: RefObject<HTMLElement | null>[];
}) => {
  const modalRef = useRef(null);

  UseClickOutside(
    modalRef,
    () => {
      setOpen(false);
    },
    excludeRefs,
  );

  return (
    <div className={`${styles.modal} ${open === true ? styles.active : ""}`} ref={modalRef}>
      <div className={styles.modal__background}>
        <div className={styles.modal__top}>
          <div className={styles["modal__top-title"]}>
            <img src={Setting} loading="lazy" />
            <div>Providers</div>
          </div>
          <img
            id="closeModal"
            src={CloseModal}
            width="11"
            alt="SettingIcon"
            loading="lazy"
            onClick={() => setOpen(false)}
          />
        </div>
        <div className={styles.modal__input}>
          <input id="searchModal" type="search" placeholder="Provider search..." />
          <img id="findSwapModal" src={Find} className={styles.glass} alt="Glass" loading="lazy" />
        </div>
        <div className={styles.modal__content}>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
          <div className={styles.moda__item}>
            <div className={styles["modal__item-img"]}></div>
            <div className={styles["modal__item-text"]}>
              <span>EURASIAN Gaming</span>
              <p>90 games</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
