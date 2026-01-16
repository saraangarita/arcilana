import React from "react";
import "../styles/Contacto.css";
import whatsappIcon from "../Assets/w.webp";

function Contacto() {
  return (
    <section className="contacto">
      <div className="contacto-contenido">
        <h2 className="contacto-titulo">Hablemos…</h2>

        <p className="contacto-texto">
          Cada pieza de ARCILANA se crea a mano con amor y dedicación.
        </p>

        <p className="contacto-texto">
          Si tienes una idea o un pedido especial, estaremos encantados de
          ayudarte.
        </p>

        <a
          href="https://wa.me/573225099012"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-boton"
        >
          <img src={whatsappIcon} alt="WhatsApp" />
          WhatsApp
        </a>

        <div className="contacto-iconos">
          {/* Teléfono */}
          <div className="icono-item">
            <div className="icono-circulo">
              <svg viewBox="0 0 24 24">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L9 10a16 16 0 0 0 5 5l.6-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
              </svg>
            </div>
            <span>+57 3225099012</span>
          </div>

          {/* Ubicación */}
          <div className="icono-item">
            <div className="icono-circulo">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10z" />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
            </div>
            <span>Cartagena</span>
          </div>

          {/* Horario */}
          <div className="icono-item">
            <div className="icono-circulo">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>
            <span>L–V · 9:00 – 6:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
