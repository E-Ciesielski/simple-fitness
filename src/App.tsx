import { NavLink, Outlet } from "react-router";
import "./App.css";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuToggle() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="wrapper">
      <div className="app-nav">
        <header className="app-header">
          <a className="logo">Fitness</a>
          <button className="side-nav-toggle" onClick={handleMenuToggle}>
            {showMenu ? "close" : "menu"}
          </button>
        </header>
        {showMenu && (
          <nav className="side-nav" onClick={handleMenuToggle}>
            <NavLink to="/" className="nav-link">
              Dashboard
            </NavLink>
            <NavLink to="/calories" className="nav-link">
              Calories tracker
            </NavLink>
            <NavLink to="/" className="nav-link">
              Weight tracker
            </NavLink>
            <NavLink to="/" className="nav-link">
              Workout planner
            </NavLink>
          </nav>
        )}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
