import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductoDetalle.css";
import { productos } from "./Productos";

function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = productos.find((p) => p.id === parseInt(id));
  const [zoom, setZoom] = useState(1);

  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="detalle-container">
      <button className="volver" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="detalle-producto">
        <div className="imagen-container">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{ transform: `scale(${zoom})` }}
          />
        </div>

        <div className="info-producto">
          <h2>{producto.nombre}</h2>
          <p className="precio">{producto.precio}</p>
          <p className="descripcion">{producto.descripcion}</p>

          <div className="zoom-controles">
            <button onClick={() => setZoom(Math.max(1, zoom - 0.1))}>−</button>
            <button onClick={() => setZoom(Math.min(1.6, zoom + 0.1))}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
