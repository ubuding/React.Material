import React from "react";

export const Block = ({ title, describe, className, children }: any) => {
  return (
    <div
      className={
        className +
        " w-full flex flex-col justify-between h-[20vh] border-b-2 border-solid border-black my-3"
      }
    >
      {children}
      <div className="bg-red-400 rounded-xl p-3 my-3 flex items-center">
        <h2 className="w-fit bg-black p-3 text-white rounded-xl">{title}</h2>
        <span className="text-white font-Medium ml-3">{describe}</span>
      </div>
    </div>
  );
};
