import React from "react";
import styles from './ButtonBack.module.css';
import {Link, useParams} from "react-router-dom";
import {Button} from "@/components/ui/Button/Button";
import Back from "@/assets/icons/back-icon-new.svg";
import { ButtonBackProps } from "@/entities/buttonback/types";

export const ButtonBack = ({ children, to, getLocalizedPath }: ButtonBackProps) => {
  const { lang } = useParams();
  const path = to
    ? to.toString()
    : (getLocalizedPath && lang ? getLocalizedPath(lang) : '/');

  return (
    <div>
      <Link to={path} className={styles.button__back}>
        <Button variant={"back"} style={{width: 35, height: 35}}>
          <img src={Back} alt="Back" loading="lazy"/>
        </Button>
        <h4 className={styles["button__back-text"]}>{children}</h4>
      </Link>
    </div>
  )
}
