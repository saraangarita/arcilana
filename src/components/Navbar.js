import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* BOTÓN HAMBURGUESA */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li className="nav-link" onClick={closeMenu}>
          <NavLink to="/" end>
            {({ isActive }) => (
              <button className={`nav-btn ${isActive ? "active" : ""}`}>
                Inicio
              </button>
            )}
          </NavLink>
        </li>

        <li className="nav-link" onClick={closeMenu}>
          <NavLink to="/productos">
            {({ isActive }) => (
              <button className={`nav-btn ${isActive ? "active" : ""}`}>
                Productos
              </button>
            )}
          </NavLink>
        </li>

        <li className="nav-link" onClick={closeMenu}>
          <NavLink to="/nosotros">
            {({ isActive }) => (
              <button className={`nav-btn ${isActive ? "active" : ""}`}>
                Sobre nosotros
              </button>
            )}
          </NavLink>
        </li>

        <li className="nav-link" onClick={closeMenu}>
          <NavLink to="/contacto">
            {({ isActive }) => (
              <button className={`nav-btn ${isActive ? "active" : ""}`}>
                Contacto
              </button>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
