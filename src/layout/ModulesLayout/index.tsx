import React from "react";
import { TopBar } from "./components/TopBar";
import "./style.scss";
export const ModulesLayout = ({ children }: any) => {
  return (
    <div className="layout modules-layout">
      <TopBar />
      <div className="module-wrap">{children}</div>
    </div>
  );
};
