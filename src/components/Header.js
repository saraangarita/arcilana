import React from "react";
import "../styles/Header.css";
import heroImg from "../Assets/ARCILLA.jpg";
import whatsappIcon from "../Assets/w.webp"; // icono de WhatsApp

function Header() {
  return (
    <>
      {/* Botón WhatsApp fijo inferior */}
      <a
        href="https://wa.me/573225099012?text=Hola,%20quiero%20más%20información"
        className="whatsapp-button-bottom"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
        Habla con nosotros
      </a>

      <header
        className="header-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="header-overlay">
          <h1 className="header-title">ARCILANA</h1>
          <p className="header-subtitle">a mano, con amor</p>
        </div>
      </header>
    </>
  );
}

export default Header;
