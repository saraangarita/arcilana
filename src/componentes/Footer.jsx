import { Link } from "react-router-dom";
import { MARCA } from "../datos/config.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor">
        <div className="footer-grid">
          <div>
            <div className="wordmark">arcilana</div>
            <div className="slogan-footer">{MARCA.slogan}</div>
            <p>
              Estudio de accesorios de arcilla hechos a mano en Cartagena,
              Colombia. Piezas únicas que cuentan historias.
            </p>
            <div className="redes">
              <a
                href={MARCA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle
                    cx="17.2"
                    cy="6.8"
                    r="1.3"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href={`https://wa.me/${MARCA.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4-.1.6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3.1.2.1.7-.1 1.2Z" />
                </svg>
              </a>
              <a href={`mailto:${MARCA.email}`} aria-label="Correo">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Tienda</h4>
            <ul>
              <li>
                <Link to="/productos">Todos los productos</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Terminos y condiciones</h4>
            <ul>
              <li>
                <a
                  href="/terminos-condiciones-arcilana.pdf"
                  download="Terminos-y-condiciones-Arcilana.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descargar términos y condiciones (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Hablemos</h4>
            <ul>
              <li>
                <a
                  href={`https://wa.me/${MARCA.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp {MARCA.whatsappBonito}
                </a>
              </li>
              <li>
                <a href={`mailto:${MARCA.email}`}>{MARCA.email}</a>
              </li>
              <li>{MARCA.ciudad}</li>
            </ul>
            <h4 style={{ marginTop: 20 }}>Horario de atención</h4>
            <div className="horario">
              {MARCA.horario.map((h) => (
                <div key={h.dias}>
                  <span>{h.dias}</span>
                  <span>{h.horas}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-final">
          <span>
            © {new Date().getFullYear()} {MARCA.firma} · {MARCA.slogan} · Hecho
            a mano en Cartagena, Colombia
          </span>
        </div>
      </div>
    </footer>
  );
}
