import React from "react";
import { Outlet } from "react-router-dom";

import styles from "@/layout/AuthLayout/AuthLayout.module.css";

export const AuthLayout: React.FC = () => {
  return (
    <div className={styles.app}>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
