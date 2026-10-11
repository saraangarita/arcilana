import { porId } from '../datos/productos.js'
import { fmt } from '../datos/config.js'
import { useCarrito } from '../contexto/CarritoContexto.jsx'
import FotoProducto from './FotoProducto.jsx'

// Drawer lateral del carrito. El botón final abre WhatsApp
// con el pedido completo formateado.
export default function Carrito({ abierto, alCerrar }) {
  const { items, cambiarCantidad, quitar, vaciar, total, mensajeWhatsApp } = useCarrito()

  return (
    <>
      <div className={`drawer-overlay ${abierto ? 'ver' : ''}`} onClick={alCerrar} />
      <aside className={`drawer drawer-der ${abierto ? 'abierto' : ''}`} aria-hidden={!abierto} aria-label="Carrito de compras">
        <div className="drawer-cab">
          <h3>Tu carrito</h3>
          <button className="icono-btn" aria-label="Cerrar carrito" onClick={alCerrar}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="carrito-vacio">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5" width="72">
              <circle cx="50" cy="32" r="14" /><circle cx="31" cy="46" r="14" /><circle cx="69" cy="46" r="14" /><circle cx="38" cy="68" r="14" /><circle cx="62" cy="68" r="14" />
            </svg>
            <p>Tu carrito está vacío, pero nuestro taller está lleno de piezas esperándote.</p>
            <a className="btn btn-primario" href="/productos" onClick={alCerrar}>Ver productos</a>
          </div>
        ) : (
          <>
            <div className="carrito-lista">
              {items.map((i) => {
                const p = porId(i.id)
                if (!p) return null // producto ya no existe → no se muestra
                return (
                  <div className="item-carrito" key={i.id}>
                    <div className="item-foto">
                      <FotoProducto producto={p} mini />
                    </div>
                    <div className="item-info">
                      <div className="item-nombre">{p.nombre}</div>
                      <div className="item-precio">{fmt(p.precio)}</div>
                      <div className="cant-controles">
                        <button aria-label="Quitar uno" onClick={() => cambiarCantidad(i.id, -1)}>−</button>
                        <span>{i.cantidad}</span>
                        <button aria-label="Agregar uno" onClick={() => cambiarCantidad(i.id, 1)}>+</button>
                      </div>
                    </div>
                    <button className="item-quitar" aria-label={`Quitar ${p.nombre}`} onClick={() => quitar(i.id)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m3 0-1 13H7L6 7" />
                      </svg>
                    </button>
                  </div>
                )
              })}
            </div>

            <div className="drawer-pie-carrito">
              <div className="drawer-total">
                <span>Total</span>
                <strong>{fmt(total)}</strong>
              </div>
              <p className="nota-carrito">
                Coordinamos pago y envío por WhatsApp, en horario de atención (L–V 9–6).
              </p>
              <a className="btn btn-wa ancho" href={mensajeWhatsApp()} target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4-.1.6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3.1.2.1.7-.1 1.2Z" /></svg>
                Pedir por WhatsApp
              </a>
              <button className="vaciar" onClick={vaciar}>Vaciar carrito</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
