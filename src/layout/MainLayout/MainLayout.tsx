import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import styles from "./MainLayout.module.css";

import { Modal } from "@/components/ui/Modal/Modal";
import { TasksContext } from "@/Context/TasksContext";
import { Footer } from "@/layout/Footer/Footer";
import { Header } from "@/layout/Header/Header";
import { Navigation } from "@/layout/Navigation/Navigation";
import {BurgerMenu} from "@/components/ui/BurgerMenu/BurgerMenu";
import {ConditionModal} from "@/components/ui/ConditionModal/ConditionModal";
import {PauseBonusModal} from "@/components/ui/PauseBonusModal/PauseBonusModal";
import {TasksModal} from "@/components/ui/TasksModal/TasksModal";

export const MainLayout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openCondition, setOpenCondition] = useState(false);
  const [openPause, setOpenPause] = useState(false);
  const [openTasks, setOpenTasks] = useState(false);

  return (
    <div className={styles.app}>
      <TasksContext.Provider
        value={{
          IsProviders: open, setIsProviders: setOpen,
          IsMenu: openMenu, setIsMenu: setOpenMenu,
          IsCondition: openCondition, setIsCondition: setOpenCondition,
          IsPause: openPause, setIsPause: setOpenPause,
          IsTasksModal: openTasks, setIsTasksModal: setOpenTasks,
      }}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Modal open={open} setOpen={setOpen} />
        <BurgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <ConditionModal openCondition={openCondition} setOpenCondition={setOpenCondition} />
        <PauseBonusModal openPause={openPause} setOpenPause={setOpenPause} />
        <TasksModal openTasks={openTasks} setOpenTasks={setOpenTasks} />
        <Navigation />
      </TasksContext.Provider>
      <Footer />
    </div>
  );
};
