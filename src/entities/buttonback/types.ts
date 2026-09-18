import { To } from "react-router-dom";

export interface ButtonBackProps {
  children?: React.ReactNode;
  to?: To | string;
  getLocalizedPath?(lang: string): string;
}
