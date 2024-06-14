import React from "react";
import Overview from "./Overview";
export const RootLayout = ({ children }: any) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Overview>{children}</Overview>
    </div>
  );
};
