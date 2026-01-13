import React from "react";
import "../styles/Contacto.css";
import whatsappIcon from "../Assets/w.webp";

function Contacto() {
  return (
    <section className="contacto">
      <div className="contacto-contenido">
        <h2 className="contacto-titulo">Hablemos...</h2>

        <p className="contacto-descripcion">
          Cada pieza de ARCILANA se crea a mano con amor y dedicación. Si tienes
          una idea, un pedido especial o quieres saber más, escríbenos y
          estaremos felices de ayudarte.
        </p>

        <a
          href="https://wa.me/573225099012?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20ARCILANA"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-boton"
        >
          <img src={whatsappIcon} alt="WhatsApp" />
          Hablar por WhatsApp
        </a>

        <div className="contacto-info">
          <span>📞 +57 322 509 9012</span>
          <span>📍 Colombia</span>
          <span>🕒 Lunes a viernes · 9:00 am – 6:00 pm</span>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
