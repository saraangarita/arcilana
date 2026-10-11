import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useDocumentosMeta from "../ganchos/useDocumentosMeta.js";
import { porId, PRODUCTOS, descuentoDe } from "../datos/productos.js";
import { fmt, linkWhatsApp } from "../datos/config.js";
import { useCarrito } from "../contexto/CarritoContexto.jsx";
import GaleriaProducto from "../componentes/GaleriaProducto.jsx";
import TarjetaProducto from "../componentes/TarjetaProducto.jsx";
import CarruselResenas from "../componentes/CarruselResenas.jsx";
import NoEncontrado from "./NoEncontrado.jsx";

// Detalle de producto — inspirado en la referencia:
// galería con zoom + precio (con descuento) + cantidad +
// Agregar al carrito + Comprar ahora (WhatsApp) + métodos de pago.
export default function DetalleProducto({ alAgregar }) {
  const { id } = useParams();
  const { agregar } = useCarrito();
  const producto = porId(id);
  const [cantidad, setCantidad] = useState(1);

  useDocumentosMeta(producto?.nombre, producto?.descripcion);

  if (!producto) return <NoEncontrado />;

  const agotado = producto.estado === "agotado";
  const descuento = descuentoDe(producto);
  const relacionados = PRODUCTOS.filter(
    (p) =>
      p.id !== producto.id &&
      (p.categoria === producto.categoria ||
        p.coleccion === producto.coleccion),
  ).slice(0, 4);

  return (
    <section className="seccion pagina-detalle">
      <div className="contenedor">
        <nav className="migas reveal" aria-label="Miga de pan">
          <Link to="/">Inicio</Link> / <Link to="/productos">Productos</Link> /{" "}
          <span>{producto.nombre}</span>
        </nav>

        <div className="detalle-grid">
          <div className="reveal">
            <GaleriaProducto producto={producto} />
          </div>

          <div className="detalle-info reveal">
            <div className="marca-linea">Arcilana Studio</div>
            <h1 className="titulo-detalle">{producto.nombre}</h1>

            <div className="detalle-precios">
              <span className="precio-actual">{fmt(producto.precio)}</span>
              {descuento > 0 && (
                <>
                  <span className="precio-antes">
                    {fmt(producto.precioAntes)}
                  </span>
                  <span className="badge-oferta">-{descuento}%</span>
                </>
              )}
            </div>

            {agotado ? (
              <p className="agotado-nota">
                Agotado por ahora 💛 — déjanos un mensaje y te avisamos cuando
                regrese.
              </p>
            ) : (
              <>
                <div className="campo-cantidad">
                  <span className="etiqueta">Cantidad</span>
                  <div className="selector-cantidad">
                    <button
                      onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                      aria-label="Quitar uno"
                    >
                      −
                    </button>
                    <span>{cantidad}</span>
                    <button
                      onClick={() => setCantidad((c) => c + 1)}
                      aria-label="Agregar uno"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="detalle-acciones columna">
                  <button
                    className="btn btn-linea ancho"
                    onClick={() => {
                      agregar(producto.id, cantidad);
                      alAgregar?.();
                    }}
                  >
                    Agregar al carrito
                  </button>
                  <a
                    className="btn btn-primario ancho"
                    href={linkWhatsApp(
                      `Hola Arcilana ✿ quiero pedir: ${cantidad}× ${producto.nombre} (${fmt(
                        producto.precio * cantidad,
                      )}). ¿Me confirman disponibilidad y envío?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comprar ahora
                  </a>
                </div>
                <p className="mini-nota centrada">
                  “Comprar ahora” abre WhatsApp con tu pedido listo para enviar.
                </p>
              </>
            )}

            <div className="pagos-detalle">
              <span>
                El pago y el envío se coordinan al confirmar tu pedido por
                WhatsApp.
              </span>
              <span>
                🚚 Envíos a toda Colombia · preparación en 1–3 días hábiles
              </span>
            </div>

            <p className="detalle-descripcion">{producto.descripcion}</p>

            <dl className="detalle-datos">
              <div>
                <dt>Colores</dt>
                <dd>{producto.colores.join(" · ")}</dd>
              </div>
              <div>
                <dt>Material</dt>
                <dd>{producto.material}</dd>
              </div>
              <div>
                <dt>Envío</dt>
                <dd>
                  A toda Colombia, se confirma por WhatsApp ·{" "}
                  <Link to="/envios">más info</Link>
                </dd>
              </div>
            </dl>

            <p className="nota izquierda">
              Te respondemos en horario de atención (L–V 9:00–6:00). Si escribes
              fin de semana, te escribimos el lunes 💛
            </p>
          </div>
        </div>

        {relacionados.length > 0 && (
          <div className="relacionados">
            <div className="cab-seccion reveal">
              <div>
                <div className="overline">También te puede gustar</div>
                <h2>Piezas relacionadas</h2>
              </div>
            </div>
            <div className="grid-productos">
              {relacionados.map((p) => (
                <TarjetaProducto key={p.id} producto={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <CarruselResenas />
    </section>
  );
}
