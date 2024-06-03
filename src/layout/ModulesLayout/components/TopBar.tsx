import {
  Avatar,
  Badge,
  Divider,
  Menu,
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
import "./style.scss";
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

  return (
    <div className="modules-layout-topbar">
      <div className="content">
        <div className="label">React.Material</div>
        <Tooltip title="More Settings">
          <div className="user-wrap" onClick={handleClick}>
            <Avatar
              alt="Natacha"
              src="/public/images/logo.png"
              sx={{ width: 36, height: 36 }}
            />
            <div className="user">ubuding</div>
            {/* <Chip
            size="medium"
            avatar={
              <Avatar
                alt="Natacha"
                src="/public/images/logo.png"
                sx={{ width: 56, height: 56 }}
              />
            }
            label="ubuding"
            variant="outlined"
          /> */}
          </div>
        </Tooltip>
        <Menu
          className="user-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={{
            vertical: -6,
            horizontal: 0,
          }}
        >
          <div
            className="menu-item"
            onClick={() => {
              window.open("https://github.com/ubuding", "_blank");
              setAnchorEl(null);
            }}
          >
            <GitHub className="icon" />
            Github
          </div>
          <Divider />
          <div
            className="menu-item"
            onClick={() => {
              setAnchorEl(null);
            }}
          >
            <GTranslate className="icon" />
            i18n
          </div>
          <Divider />

          <div
            className="menu-item"
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
              setAnchorEl(null);
            }}
          >
            {mode === "light" ? (
              <Brightness4 className="icon" />
            ) : (
              <Brightness7 className="icon" />
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
      </div>
      <Divider />
    </div>
  );
};
