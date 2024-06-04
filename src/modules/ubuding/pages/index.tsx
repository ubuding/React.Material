import React from "react";
import { Tabs, Tab } from "@mui/material";
import { Material } from "@/ubuding/components/Material";
import { Charts } from "@/ubuding/components/Charts";
import "./style.scss";
export default function Ubuding() {
  const [value, setValue] = React.useState("Material");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="ubuding-wrap">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="wrapped label tabs example"
      >
        <Tab value="Material" label="Material Components" />
        <Tab value="Waterfall" label="Waterfall List" />
      </Tabs>
      <Charts />
      <Material />
    </div>
  );
}
