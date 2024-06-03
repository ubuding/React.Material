import React from "react";
import { createRoot } from "react-dom/client";
import { Router } from "./plugins/router";
import "%/style/index";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material";
const el = document.getElementById("root") as Element;
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
const root = createRoot(el);

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#efaa33",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#f30606",
        },
      },
    },
  },
  // ...other properties
});

root.render(
  <React.StrictMode>
    <CssVarsProvider>
      <Router />
    </CssVarsProvider>
  </React.StrictMode>,
);
