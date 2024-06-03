import { lazy } from "react";
export default [
  {
    path: "/ubuding",
    Component: lazy(() => import("@/ubuding/pages")),
  },
];
