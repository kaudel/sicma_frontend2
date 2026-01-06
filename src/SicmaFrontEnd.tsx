import React from "react";
import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

const SicmaFrontEnd = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default SicmaFrontEnd;
