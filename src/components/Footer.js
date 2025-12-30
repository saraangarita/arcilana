import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section left">
          <h2 className="footer-title">Arcilana Studio</h2>
          <p className="footer-item">
            <i className="fas fa-map-marker-alt"></i>
            Cartagena - Colombia
          </p>
          <p className="footer-item">
            <i className="fas fa-phone"></i>
            +1 (555) 987-6543
          </p>
          <p className="footer-item">
            <i className="fas fa-envelope"></i>
            contacto@arcilana.com
          </p>
        </div>

        <div className="footer-section center">
          <h2 className="footer-title">Síguenos</h2>
          <div className="social-icons">
            {/* Instagram real */}
            <a
              href="https://www.instagram.com/arcilanastudio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* TikTok real */}
            <a
              href="https://www.tiktok.com/@arcilanastudio?_r=1&_t=ZS-91iAsNrcMfC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>

        <div className="footer-section right">
          <h2 className="footer-title">Horario de Atención</h2>
          <p className="horario-info">
            Lunes a Viernes: 9:00 AM - 6:00 PM
            <br />
            Sábado: 10:00 AM - 4:00 PM
            <br />
            Domingo: Cerrado
          </p>
        </div>
      </div>

      <p className="copyRight">
        © 2025 Arcilana Studio. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
