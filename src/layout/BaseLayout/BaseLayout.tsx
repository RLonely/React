import styles from './BaseLayout.module.css'
import {Header} from "@/layout/Header/Header";
import {Outlet} from "react-router-dom";

export const BaseLayout = () => {

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
