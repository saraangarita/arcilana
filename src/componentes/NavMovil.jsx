import { NavLink } from 'react-router-dom'
import { MARCA, linkWhatsApp } from '../datos/config.js'

// Menú lateral para móvil
export default function NavMovil({ abierto, alCerrar }) {
  return (
    <>
      <div className={`drawer-overlay ${abierto ? 'ver' : ''}`} onClick={alCerrar} />
      <aside className={`drawer drawer-izq ${abierto ? 'abierto' : ''}`} aria-hidden={!abierto}>
        <div className="drawer-cab">
          <span className="logo-nombre">Arcilana</span>
          <button className="icono-btn" aria-label="Cerrar menú" onClick={alCerrar}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <nav className="drawer-nav">
          <NavLink to="/" end onClick={alCerrar}>Inicio</NavLink>
          <NavLink to="/productos" onClick={alCerrar}>Productos</NavLink>
          <NavLink to="/nosotros" onClick={alCerrar}>Nosotros</NavLink>
          <NavLink to="/contacto" onClick={alCerrar}>Contacto</NavLink>
        </nav>

        <a className="btn btn-wa" href={linkWhatsApp(`Hola ${MARCA.nombre} ✿`)} target="_blank" rel="noopener noreferrer">
          Escríbenos por WhatsApp
        </a>

        <div className="drawer-pie">
          <p>{MARCA.slogan}</p>
          <p>{MARCA.ciudad}</p>
        </div>
      </aside>
    </>
  )
}
