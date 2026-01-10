import React from "react";
import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";
import { Toaster, toast } from "sonner";

const SicmaFrontEnd = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default SicmaFrontEnd;
