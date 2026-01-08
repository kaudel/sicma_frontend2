import AdminLayout from "@/admin/layout/AdminLayout";
import AdminPage from "@/admin/pages/AdminPage";
import HomePage from "@/game/pages/home/HomePage";
import GameLayout from "@/game/layouts/GameLayout";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import StatsPage from "@/game/pages/stats/StatsPage";
import GamesPage from "@/game/pages/Games/GamesPage";

/*Sera usada en layloading */
//const AdminPage = lazy(() => import("@/admin/pages/AdminPage"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <GameLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/games", element: <GamesPage /> },
      { path: "/stats", element: <StatsPage /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ index: true, element: <AdminPage /> }],
  },
]);
