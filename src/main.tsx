import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardPage from "./features/dashboard/DashboardPage.tsx";
import CaloriesPage from "./features/calories/CaloriesPage.tsx";
import AppLayout from "./layouts/AppLayout.tsx";
import CaloriesNewPage from "./features/calories/CaloriesNewPage.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import RegisterPage from "./features/auth/RegisterPage.tsx";
import LoginPage from "./features/auth/LoginPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/calories" element={<CaloriesPage />} />
          <Route path="/calories/new" element={<CaloriesNewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
