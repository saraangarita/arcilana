import React from "react";
import "../styles/Header.css";
import heroImg from "../Assets/ARCILLA.jpg"; // usa tu imagen

function Header() {
  return (
    <header
      className="header-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="header-overlay">
        <h1 className="header-title">ARCILANA</h1>
        <p className="header-subtitle">a mano, con amor</p>
      </div>
    </header>
  );
}

export default Header;
