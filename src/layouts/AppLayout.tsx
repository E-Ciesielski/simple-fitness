import { NavLink } from "react-router";
import "./AppLayout.css";
import { useState } from "react";

export default function AppLayout() {
  const [showNav, setShowNav] = useState(false);

  function handleToggleNav() {
    setShowNav(!showNav);
  }
  return (
    <div className="main-layout">
      <div className="nav__wrapper">
        <NavLink to="/" className="logo">
          Fitness
        </NavLink>
        <nav className={showNav ? "nav" : "nav nav--hide"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/calories">Calories</NavLink>
        </nav>
        <i
          className={(showNav ? "bi-x-lg" : "bi-list") + " bi nav__icon"}
          onClick={handleToggleNav}
        ></i>
      </div>
      <div className="main-layout__content">Test</div>
    </div>
  );
}
