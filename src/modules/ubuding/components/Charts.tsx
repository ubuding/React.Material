import { LineChart, PieChart } from "@mui/x-charts";
import React from "react";
export const Charts = () => {
  return (
    <div className="w-[100%] flex flex-row justify-evenly my-3">
      <div className="w-[40%] shadow-[0_0_10px_0_var(--mui-palette-grey-500)] rounded-xl p-3">
        <LineChart
          xAxis={[
            { data: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"] },
          ]}
          series={[
            {
              data: [26, 213, 573, 1536, 851, 1569, 527],
            },
          ]}
          height={300}
        />
      </div>
      <div className="w-[40%] shadow-[0_0_10px_0_var(--mui-palette-grey-500)] rounded-xl p-3 flex justify-center items-center">
        <PieChart
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
          series={[
            {
              data: [
                { id: 0, value: 60, label: "React" },
                { id: 1, value: 50, label: "Material" },
                { id: 2, value: 30, label: "Tailwindcss" },
                { id: 3, value: 10, label: "Jotai" },
                { id: 4, value: 5, label: "I18next" },
              ],
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
            },
          ]}
          height={200}
        />
      </div>
    </div>
  );
};
