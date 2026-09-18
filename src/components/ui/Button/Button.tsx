import React, { forwardRef } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "gunpowder" | "royalBlue" | "back";
  fullWidth?: boolean;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      fullWidth = false,
      onClick,
      style,
      className = "",
      type = "button",
    },
    ref,
  ) => {
    const classes = [
      styles.button,
      styles[variant],
      fullWidth ? styles.fullWidth : "",
      className,
    ].join(" ");

    return (
      <button type={type} className={classes} onClick={onClick} style={style} ref={ref}>
        {children}
      </button>
    );
  },
);
