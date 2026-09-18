import { createContext } from "react";

export const TasksContext = createContext<{
  IsProviders: boolean;
  IsMenu: boolean;
  IsCondition: boolean;
  IsPause: boolean;
  IsTasksModal: boolean;
  setIsProviders: (value: boolean) => void;
  setIsMenu: (value: boolean) => void;
  setIsCondition: (value: boolean) => void;
  setIsPause: (value: boolean) => void;
  setIsTasksModal: (value: boolean) => void;
}>({
  IsProviders: false,
  IsMenu: false,
  IsCondition: false,
  IsPause: false,
  IsTasksModal: false,
  setIsProviders: () => {},
  setIsMenu: () => {},
  setIsCondition: () => {},
  setIsPause: () => {},
  setIsTasksModal: () => {},
});
