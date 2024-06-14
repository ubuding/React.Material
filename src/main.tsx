import React from "react";
import { createRoot } from "react-dom/client";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material";
import { Router } from "./router";
import "./i18n";
import "style/index";
const el = document.getElementById("root") as Element;
const root = createRoot(el);
root.render(
  <React.StrictMode>
    <CssVarsProvider>
      <Router />
    </CssVarsProvider>
  </React.StrictMode>
);
