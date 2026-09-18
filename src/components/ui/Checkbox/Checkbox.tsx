import styles from "./Checkbox.module.css";

import Check from "@/assets/icons/check.svg";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
};

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, children }) => {
  return (
    <div className={styles.checkbox}>
      <label className={styles.checkbox__label}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className={styles.checkbox__input}
        />

        <span className={styles.checkbox__box}>
          {checked && <img src={Check} alt="check" className={styles.checkbox__icon} />}
        </span>

        <span className={styles.checkbox__text}>{children}</span>
      </label>
    </div>
  );
};
