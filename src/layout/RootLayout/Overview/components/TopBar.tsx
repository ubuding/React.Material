import React from "react";
import {
  AppBar,
  Badge,
  Divider,
  Menu,
  Toolbar,
  Tooltip,
  useColorScheme,
  IconButton,
} from "@mui/material";
import {
  GitHub,
  Brightness7,
  GTranslate,
  Brightness4Outlined,
  SmartToy,
} from "@mui/icons-material";
import { useLocales } from "i18n";
import { useLocation, useNavigate } from "react-router-dom";
export const TopBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { mode, setMode } = useColorScheme();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [locale, setLocales] = useLocales();

  const location = useLocation();
  const nav = useNavigate();

  return (
    <AppBar position="sticky" className="flex items-center justify-center">
      <Toolbar className="w-[900px] p-0">
        <div
          className="text-base cursor-pointer"
          onClick={() => {
            window.open("https://github.com/ubuding/React.Material", "_blank");
          }}
        >
          React.Material
        </div>
        <IconButton
          color="inherit"
          className="ml-3 mr-auto"
          onClick={() => {
            nav(location.pathname === "/signpost" ? "/robot" : "/signpost");
          }}
        >
          {location.pathname === "/signpost" ? (
            <span className="iconfont icon-Sign-Post text-lg"></span>
          ) : (
            <SmartToy />
          )}
        </IconButton>

        <IconButton color="inherit" className="mr-2" onClick={handleClick}>
          <GTranslate />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={{
            vertical: -6,
            horizontal: 0,
          }}
          className="cursor-pointer pt-0 pb-0"
        >
          <div
            className="flex items-center text-xs px-2 py-2  hover:bg-[var(--mui-palette-action-hover)]"
            onClick={() => {
              setAnchorEl(null);
              setLocales("en");
            }}
          >
            English
          </div>
          <Divider />
          <div
            className="flex items-center text-xs px-2 py-2  hover:bg-[var(--mui-palette-action-hover)]"
            onClick={() => {
              setAnchorEl(null);
              setLocales("zh");
            }}
          >
            简体中文
          </div>
        </Menu>

        <IconButton
          color="inherit"
          className="mr-2"
          onClick={() => {
            window.open("https://github.com/ubuding", "_blank");
          }}
        >
          <Badge
            variant="dot"
            color="error"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <GitHub />
          </Badge>
        </IconButton>

        <IconButton
          color="inherit"
          className="mr-2"
          onClick={() => {
            setMode(mode === "light" ? "dark" : "light");
          }}
        >
          {mode === "light" ? <Brightness4Outlined /> : <Brightness7 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
