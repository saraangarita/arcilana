import { Link } from 'react-router-dom'
import useDocumentosMeta from '../ganchos/useDocumentosMeta.js'

export default function NoEncontrado() {
  useDocumentosMeta('Página no encontrada')

  return (
    <section className="seccion pagina-404">
      <div className="contenedor">
        <div className="cuadro-404 reveal">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5" width="90" aria-hidden="true">
            <circle cx="50" cy="32" r="14" /><circle cx="31" cy="46" r="14" /><circle cx="69" cy="46" r="14" /><circle cx="38" cy="68" r="14" /><circle cx="62" cy="68" r="14" />
          </svg>
          <h1>Esta pieza se fracturó en el horno 🔥</h1>
          <p>La página que buscas no existe, pero el taller está lleno de piezas que sí.</p>
          <Link className="btn btn-primario" to="/">Volver al inicio</Link>
        </div>
      </div>
    </section>
  )
}
