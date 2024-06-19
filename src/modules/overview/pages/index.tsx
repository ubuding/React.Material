import React, { useEffect } from "react";
import { Container, Divider, Menu, useColorScheme } from "@mui/material";
import { useTranslation } from "i18n";
import { useLocales } from "i18n";
import { getHistory } from "@/overview/service";
export default function Overview() {
  useEffect(() => {
    getHistory();
  }, []);

  const [t] = useTranslation();
  const [, setLocales] = useLocales();
  const { mode, setMode } = useColorScheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const items = [
    {
      label: "Webpack",
      icon: "webpack",
      url: "https://webpack.js.org",
    },
    {
      label: "React",
      icon: "react",
      url: "https://react.dev",
    },
    {
      label: "Material ui",
      icon: "material",
      url: "https://mui.com/material-ui",
    },
    {
      label: "Jotai",
      icon: "jotai",
      url: "https://jotai.org",
    },
    {
      label: "Axios",
      icon: "axios",
      url: "https://axios-http.com",
    },
    {
      label: "i18next",
      icon: "i18next",
      url: "https://www.i18next.com",
    },
    {
      label: "TailwindCSS",
      icon: "tailwindcss",
      url: "https://tailwindcss.com",
    },
    {
      label: "Sass",
      icon: "sass",
      url: "https://sass-lang.com",
    },
    {
      label: "iconfont",
      icon: "iconfont",
      url: "https://www.iconfont.cn",
    },
    {
      label: "Swiper",
      icon: "swiper",
      url: "https://swiperjs.com",
    },
    {
      label: "Form",
      icon: "form",
      url: "https://react-hook-form.com",
    },
    {
      label: "Typescript",
      icon: "typescript",
      url: "https://www.typescriptlang.org",
    },
    {
      label: "Prettier",
      icon: "prettier",
      url: "https://prettier.io",
    },
    {
      label: "Eslint",
      icon: "eslint",
      url: "https://eslint.org",
    },
    {
      label: "PLOP",
      icon: "plop",
      url: "https://plopjs.com",
    },
  ];
  return (
    <Container
      maxWidth={false}
      className="w-lvw h-lvh flex flex-col overflow-hidden min-w-[900px] p-0 relative "
    >
      <div className="h-fit mt-5 mr-3 flex flex-row-reverse items-center z-10">
        <div
          className="w-8 h-8 mx-3 bg-cover cursor-pointer bg-[url('@/overview/images/start.png')] animate-pulse"
          onClick={() => {
            setMode(mode === "light" ? "dark" : "light");
          }}
        ></div>

        <div
          className="w-[26px] h-8 mx-3 bg-cover cursor-pointer bg-[url('@/overview/images/fire.png')]"
          onClick={handleClick}
        ></div>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={{
            vertical: -6,
            horizontal: 12,
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
      </div>
      <div
        className="w-[500px] h-fit mt-20 mb-7 mx-auto relative flex justify-center items-center p-3 cursor-pointer"
        onClick={() => {
          window.open("https://github.com/ubuding", "_blank");
        }}
      >
        <h2 className="text-8xl z-10 flex items-center">
          U
          <div className="w-[166px] h-[100px] bg-[url('~assets/images/bud.png')] mx-2 bg-cover animate-bounce"></div>
          ING
        </h2>
      </div>
      <div
        className="w-[580px] h-[50px] rounded-full flex justify-center items-center mx-auto bg-white text-black cursor-pointer relative"
        style={{
          boxShadow: "var(--mui-shadows-6)",
        }}
        onClick={() => {
          window.open("https://github.com/ubuding/React.Material", "_blank");
        }}
      >
        <span className="text-yellow-500">
          {" "}
          {t("name")}.{t("ui.name")}
        </span>
        <span className="mx-3">-</span>
        <span>{t("overview.introduction")}</span>
      </div>
      <div className="flex flex-wrap w-[580px] h-fit mt-5 mx-auto">
        {items.map((item) => {
          return (
            <div
              key={item.icon}
              className="group w-[116px] h-[116px] flex flex-col justify-evenly cursor-pointer items-center rounded-xl hover:bg-[rgba(0,0,0,var(--mui-palette-action-hoverOpacity))] relative"
              onClick={() => {
                window.open(item.url, "_blank");
              }}
            >
              <div
                className="dd w-9 h-9 bg-contain bg-no-repeat bg-center rounded-full group-hover:animate-bounce-slow"
                style={{
                  background: `url("/public/images/${item.icon}.png")`,
                }}
              ></div>
              <div className="text-xs">{item.label}</div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
