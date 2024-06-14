import { lazy } from "react";
export default [
  {
    path: "/robot",
    Component: lazy(() => import("@/robot/pages")),
  },
];
