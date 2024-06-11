import React from "react";
import { createRoot } from "react-dom/client";
import { Router } from "./plugins/router";
import "%/style/index";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material";
const el = document.getElementById("root") as Element;
const root = createRoot(el);
root.render(
  <React.StrictMode>
    <CssVarsProvider>
      <Router />
    </CssVarsProvider>
  </React.StrictMode>
);
