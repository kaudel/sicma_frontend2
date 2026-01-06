import AdminPage from "@/admin/pages/adminPage";
import HomePage from "@/game/home/HomePage";
import { createBrowserRouter } from "react-router";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);
