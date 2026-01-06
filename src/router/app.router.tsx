import AdminLayout from "@/admin/layout/AdminLayout";
import AdminPage from "@/admin/pages/AdminPage";
import HomePage from "@/game/home/HomePage";
import GameLayout from "@/game/layouts/GameLayout";
import { createBrowserRouter } from "react-router";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <GameLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ index: true, element: <AdminPage /> }],
  },
]);
