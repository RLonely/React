import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Country } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import styles from "./PhoneCountrySelect.module.css";

import Arrow from "@/assets/icons/arrow-down.svg";
import { getCountryName, type CountryOption } from "@/shared/phoneCountryOptions";

type PhoneCountrySelectProps = {
  children: ReactNode;
  locale: string;
  onSelect: (country: Country) => void;
  options: CountryOption[];
  selectedCountry: Country;
};

export const PhoneCountrySelect = ({
  children,
  locale,
  onSelect,
  options,
  selectedCountry,
}: PhoneCountrySelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.country === selectedCountry) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.phoneCountrySelect} ref={containerRef}>
      <div className={styles.phoneCountrySelect__buttonWrapper}>
        <button
          type="button"
          className={`${styles.phoneCountrySelect__button} ${
            isOpen ? styles.phoneCountrySelect__border : ""
          }`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {(() => {
            const Flag = flags[selectedOption.country];
            return Flag ? (
              <span className={styles.phoneCountrySelect__flag}>
                <Flag title={selectedOption.country} />
              </span>
            ) : null;
          })()}
          <img
            src={Arrow}
            alt=""
            loading="lazy"
            className={`${styles.phoneCountrySelect__arrow} ${
              isOpen ? styles.phoneCountrySelect__arrowOpen : ""
            }`}
          />
        </button>
      </div>

      {children}

      {isOpen && (
        <div className={styles.phoneCountrySelect__dropdown} role="listbox">
          {options.map((option) => (
            <button
              key={option.country}
              type="button"
              className={`${styles.phoneCountrySelect__option} ${
                option.country === selectedCountry
                  ? styles["phoneCountrySelect__option-active"]
                  : ""
              }`}
              onClick={() => {
                onSelect(option.country);
                setIsOpen(false);
              }}
            >
              {(() => {
                const Flag = flags[option.country];
                return Flag ? (
                  <span className={styles.phoneCountrySelect__flag}>
                    <Flag title={option.country} />
                  </span>
                ) : null;
              })()}
              <span className={styles.phoneCountrySelect__optionMeta}>
                <span className={styles.phoneCountrySelect__optionName}>
                  {getCountryName(option.country, locale)}
                </span>
                <span className={styles.phoneCountrySelect__dialCode}>{option.dialCode}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
