import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className=" mx-auto min-h-screen max-w-screen-xl px-2">
      <Outlet />
    </div>
  );
};

export default Body;
