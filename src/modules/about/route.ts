import { lazy } from "react";
export default [
  {
    path: "/about",
    Component: lazy(() => import("@/about/pages")),
  },
];
