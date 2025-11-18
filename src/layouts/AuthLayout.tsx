import { NavLink, Outlet } from "react-router";
import "./AuthLayout.css";

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <nav className="auth-nav">
        <div>
          <NavLink to="/" className="logo">
            <span className="logo--primary">Simple</span>Fit
          </NavLink>
        </div>
      </nav>
      <div className="auth-layout__content">
        <Outlet />
      </div>
    </div>
  );
}
