import { useState } from "react";
import ZoomImagen from "./ZoomImagen.jsx";

// (foto de modelo / foto de producto, como la referencia).
export default function GaleriaProducto({ producto }) {
  const imagenes = producto.imagenes?.length
    ? producto.imagenes
    : [{ tipo: "producto", src: null }];
  const [activa, setActiva] = useState(0);
  const actual = imagenes[activa];

  return (
    <div className="galeria">
      <div className="galeria-principal">
        {actual.src ? (
          <ZoomImagen
            src={actual.src}
            alt={`${producto.nombre} — foto ${activa + 1}`}
          />
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
      </div>

      {imagenes.length > 1 && (
        <div
          className="galeria-thumbs"
          role="tablist"
          aria-label="Fotos del producto"
        >
          {imagenes.map((im, i) => (
            <button
              key={i}
              className={`galeria-thumb ${i === activa ? "on" : ""}`}
              onClick={() => setActiva(i)}
              aria-label={`Ver foto ${i + 1} (${im.tipo === "modelo" ? "en modelo" : "de producto"})`}
            >
              <img src={im.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
