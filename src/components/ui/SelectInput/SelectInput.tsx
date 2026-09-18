import React, { useEffect, useRef, useState } from "react";

import styles from "./SelectInput.module.css";

import Arrow from "@/assets/icons/arrow-down-grey.svg";
import type { SelectInputProps } from "@/components/ui/SelectInput/types";

export const SelectInput: React.FC<SelectInputProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles["select-input"]} ref={containerRef}>
      <button
        type="button"
        className={`${styles["select-input__content"]} ${isOpen ? styles["select-input__border"] : ""}`}
        onClick={toggleDropdown}
      >
        <div className={styles["select-input__titles"]}>
          {value.icon && <img src={value.icon} alt={value.label} className={styles.icon} />}
          <span>{value.label}</span>
        </div>
        <span
          className={`${styles["select-input__arrow"]} ${isOpen ? styles["select-input__open"] : ""}`}
        >
          <img src={Arrow} alt="" loading="lazy" />
        </span>
      </button>

      {isOpen && (
        <div className={styles["select-input__dropdowns"]}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={styles["select-input__dropdown"]}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option.icon && (
                <img
                  src={option.icon}
                  alt={option.label}
                  className={styles["select-input__icon"]}
                />
              )}
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
