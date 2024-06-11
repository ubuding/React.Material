import {
  AppBar,
  Avatar,
  Badge,
  Divider,
  Menu,
  Toolbar,
  Tooltip,
  useColorScheme,
} from "@mui/material";
import {
  GitHub,
  Brightness4,
  Brightness7,
  GTranslate,
} from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
export const TopBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { mode, setMode } = useColorScheme();
  const navigate = useNavigate();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <div
          className="mr-[auto] text-[26px] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          React.Material
        </div>
        <Tooltip title="More Settings">
          <div
            className="flex items-center cursor-pointer "
            onClick={handleClick}
          >
            <Avatar
              alt="Natacha"
              src="/public/images/logo.png"
              sx={{ width: 36, height: 36 }}
            />
            <div className="ml-[6px]">ubuding</div>
          </div>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={{
            vertical: -6,
            horizontal: 0,
          }}
          className="cursor-pointer pt-[0px] pb-[0px]"
        >
          <div
            className="flex items-center p-[6px] w-[120px] h-[36px] hover:bg-[var(--mui-palette-action-hover)]"
            onClick={() => {
              window.open("https://github.com/ubuding", "_blank");
              setAnchorEl(null);
            }}
          >
            <GitHub className="mr-[6px]" />
            Github
          </div>
          <Divider />
          <div
            className="flex items-center p-[6px] w-[120px] h-[36px] hover:bg-[var(--mui-palette-action-hover)]"
            onClick={() => {
              setAnchorEl(null);
            }}
          >
            <GTranslate className="mr-[6px]" />
            i18n
          </div>
          <Divider />
          <div
            className="flex items-center p-[6px] w-[120px] h-[36px] hover:bg-[var(--mui-palette-action-hover)]"
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
              setAnchorEl(null);
            }}
          >
            {mode === "light" ? (
              <Brightness4 className="mr-[6px]" />
            ) : (
              <Brightness7 className="mr-[6px]" />
            )}
            <Badge
              variant="dot"
              color="primary"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              SetMode
            </Badge>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
