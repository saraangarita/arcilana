import { NavLink, Link } from 'react-router-dom'
import { useCarrito } from '../contexto/CarritoContexto.jsx'

const enlaces = [
  { a: '/', texto: 'Inicio' },
  { a: '/productos', texto: 'Productos' },
  { a: '/nosotros', texto: 'Nosotros' },
  { a: '/contacto', texto: 'Contacto' },
]

export default function Header({ alAbrirMenu, alAbrirCarrito }) {
  const { cantidadTotal } = useCarrito()

  return (
    <header className="header">
      <div className="header-grid">
        <div className="izq">
          <button className="icono-btn burger" aria-label="Abrir menú" onClick={alAbrirMenu}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>

        <Link className="logo" to="/" aria-label="Arcilana · inicio">
          <span className="logo-nombre">Arcilana</span>
          <span className="logo-studio">studio</span>
        </Link>

        <div className="der">
          <button className="icono-btn" aria-label="Carrito" onClick={alAbrirCarrito}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 7h12l1.2 13H4.8L6 7Z" />
              <path d="M9 10V6a3 3 0 0 1 6 0v4" />
            </svg>
            {cantidadTotal > 0 && (
              <span className="carrito-badge" key={cantidadTotal}>
                {cantidadTotal}
              </span>
            )}
          </button>
        </div>
      </div>

      <nav className="nav" aria-label="Principal">
        {enlaces.map((e) => (
          <NavLink
            key={e.a}
            to={e.a}
            end={e.a === '/'}
            className={({ isActive }) => (isActive ? 'activo' : '')}
          >
            {e.texto}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
