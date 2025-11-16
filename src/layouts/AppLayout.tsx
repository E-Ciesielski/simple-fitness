import { NavLink, Outlet } from "react-router";
import "./AppLayout.css";

export default function AppLayout() {
  return (
    <div className="app-layout">
      <Outlet />
      <nav className="app-nav">
        <NavLink
          className={({ isActive }) =>
            isActive ? "app-nav__link--active" : "app-nav__link"
          }
          to="/"
        >
          <i className="bi bi-house nav-icon"></i>
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "app-nav__link--active" : "app-nav__link"
          }
          to="calories"
        >
          <i className="bi bi-fire nav-icon"></i>
          Calories
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "app-nav__link--active" : "app-nav__link"
          }
          to="/"
        >
          <i className="bi bi-card-list nav-icon"></i>
          Workout
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "app-nav__link--active" : "app-nav__link"
          }
          to="/"
        >
          <i className="bi bi-list nav-icon"></i>
          Menu
        </NavLink>
      </nav>
    </div>
  );
}
