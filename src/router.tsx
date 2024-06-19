import { CircularProgress } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { Navigate, createHashRouter, RouterProvider } from "react-router-dom";
const Layout = lazy(() => import("layout/index"));

const integrated = () => {
  const modules = require.context("./modules", true, /route\.ts$/);
  return modules.keys().flatMap((url: string) => modules(url).default);
};

const children = integrated();
// Redirect
children.unshift({
  path: "/",
  element: <Navigate to="/overview" />,
});

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: children,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
]);

export const Router = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

// Can dynamically change the routing table
export const getRoutes = () => router.routes.at(0)?.children || [];
