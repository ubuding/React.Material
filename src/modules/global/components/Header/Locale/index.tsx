import React from "react";
import { MenuProps } from "antd";
import "./style.scss";
export default function Locale() {
  const [, setLocale] = useLocale();
  const onClick = (key: "zh" | "en") => {
    setLocale(key);
  };

  const items: MenuProps["items"] = [
    {
      label: <div onClick={() => onClick("zh")}>简体中文</div>,
      key: "zh",
    },
    {
      label: <div onClick={() => onClick("en")}>English</div>,
      key: "en",
    },
  ];

  return (
    <div className="locales-component ignore">
      <Dropdown menu={{ items }} placement="bottom">
        <Space>
          <div>
            <i className="iconfont icon-translate" tabIndex={0}></i>
          </div>
        </Space>
      </Dropdown>
    </div>
  );
}
