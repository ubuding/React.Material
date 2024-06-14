import { lazy } from "react";
export default [
  {
    path: "/signpost",
    Component: lazy(() => import("@/signpost/pages")),
  },
];
