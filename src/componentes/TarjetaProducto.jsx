import { Link } from "react-router-dom";
import { fmt, linkWhatsApp } from "../datos/config.js";
import { useCarrito } from "../contexto/CarritoContexto.jsx";

export default function TarjetaProducto({ producto }) {
  const { agregar } = useCarrito();
  const agotado = producto.estado === "agotado";

  const fotoPrincipal =
    producto.imagenes?.find((i) => i.tipo === "modelo")?.src ||
    producto.imagenes?.[0]?.src ||
    null;
  const fotoAlterna =
    producto.imagenes?.find(
      (i) => i.tipo === "producto" && i.src !== fotoPrincipal,
    )?.src ||
    producto.imagenes?.find((i) => i.src !== fotoPrincipal)?.src ||
    null;

  return (
    <article className={`prod-card reveal ${agotado ? "agotado" : ""}`}>
      <div className="prod-foto">
        <Link to={`/productos/${producto.id}`} aria-label={producto.nombre}>
          {fotoPrincipal ? (
            <>
              <img
                className="foto-base"
                src={fotoPrincipal}
                alt={producto.nombre}
                loading="lazy"
              />
              {fotoAlterna && (
                <img
                  className="foto-base foto-swap"
                  src={fotoAlterna}
                  alt=""
                  loading="lazy"
                />
              )}
            </>
          ) : (
            <div className="foto-vacio" role="img" aria-label={producto.nombre}>
              <svg
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
              >
                <circle cx="50" cy="32" r="14" />
                <circle cx="31" cy="46" r="14" />
                <circle cx="69" cy="46" r="14" />
                <circle cx="38" cy="68" r="14" />
                <circle cx="62" cy="68" r="14" />
              </svg>
            </div>
          )}
        </Link>
      </div>

      <div className="prod-info">
        <Link to={`/productos/${producto.id}`} className="prod-info-link">
          <div className="nombre">{producto.nombre}</div>

          <div className="precio-linea">
            <span className="precio">{fmt(producto.precio)}</span>
          </div>
        </Link>

        {producto.personalizable ? (
          <a
            className="agregar"
            href={linkWhatsApp(
              `Hola Arcilana ✿ quiero contarles una idea para una pieza personalizada (${producto.nombre})`,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir por WhatsApp
          </a>
        ) : agotado ? (
          <a
            className="agregar"
            href={linkWhatsApp(
              `Hola Arcilana ✿ ¿me avisan cuando haya de nuevo "${producto.nombre}"?`,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Avísame cuando llegue
          </a>
        ) : (
          <button
            type="button"
            className="agregar"
            onClick={() => agregar(producto.id)}
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </article>
  );
}
