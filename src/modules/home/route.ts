import { lazy } from "react";
export default [
  {
    path: "/",
    Component: lazy(() => import("@/home/pages")),
  },
];
