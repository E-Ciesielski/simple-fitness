import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardPage from "./dashboard/DashboardPage.tsx";
import CaloriesPage from "./calories/CaloriesPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<DashboardPage />} />
          <Route path="calories" element={<CaloriesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
