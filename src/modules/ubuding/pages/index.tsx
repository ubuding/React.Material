import React from "react";
import { Tabs, Tab } from "@mui/material";
import { Material } from "@/ubuding/components/Material";
import { Charts } from "@/ubuding/components/Charts";
export default function Ubuding() {
  const [value, setValue] = React.useState("Material");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="w-full h-full flex flex-col overflow-hidden overflow-y-scroll">
      <Tabs value={value} onChange={handleChange}>
        <Tab value="Material" label="Material Components" />
        <Tab value="Waterfall" label="Waterfall List" />
      </Tabs>
      <Charts />
      <Material />
    </div>
  );
}
