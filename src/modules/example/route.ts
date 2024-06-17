import { lazy } from "react";
export default [
  {
    path: "/example",
    Component: lazy(() => import("@/example/pages")),
  },
];
