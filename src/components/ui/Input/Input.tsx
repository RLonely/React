import styles from "./Input.module.css";

type InputProps = {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value: string;
  className: string;
  onChange: (value: string) => void;
  error?: string;
};

export const Input: React.FC<InputProps> = ({
  id,
  label,
  placeholder,
  type = "text",
  className = "",
  value,
  onChange,
  error,
}) => {
  return (
    <div className={styles.input__wrapper}>
      {label && (
        <label htmlFor={id} className={styles.input__label}>
          {label}
        </label>
      )}

      <input
        id={id}
        className={`${styles.input__item} ${className} ${error ? styles["input__item-error"] : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span className={styles["input__error-text"]}>{error}</span>}
    </div>
  );
};
