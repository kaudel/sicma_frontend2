import React from "react";
import { Outlet } from "react-router";

const GameLayout = () => {
  return (
    <div>
      GameLayout
      <Outlet />
    </div>
  );
};

export default GameLayout;
