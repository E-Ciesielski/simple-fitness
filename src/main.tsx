import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardPage from "./features/dashboard/DashboardPage.tsx";
import CaloriesPage from "./features/calories/CaloriesPage.tsx";
import AppLayout from "./layouts/AppLayout.tsx";
import CaloriesNewPage from "./features/calories/CaloriesNewPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/calories" element={<CaloriesPage />} />
          <Route path="/calories/new" element={<CaloriesNewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
