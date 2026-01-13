import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Productos.css";
import ac1 from "../Assets/ac1.jpg";
import ARCILLA from "../Assets/ARCILLA.jpg";
import ac2 from "../Assets/ac2.jpg";

export const productos = [
  {
    id: 1,
    nombre: "Aretes Orgánicos",
    precio: "$25.000 COP",
    descripcion:
      "Aretes hechos a mano con arcilla polimérica, ligeros y elegantes.",
    imagen: ac1,
  },
  {
    id: 2,
    nombre: "Aretes en Arcilla",
    precio: "$30.000 COP",
    descripcion: "Piezas únicas elaboradas cuidadosamente en arcilla.",
    imagen: ARCILLA,
  },
  {
    id: 3,
    nombre: "Aretes Minimalistas",
    precio: "$28.000 COP",
    descripcion: "Diseño minimalista ideal para cualquier ocasión.",
    imagen: ac2,
  },
];

function Productos() {
  const navigate = useNavigate();

  return (
    <div className="productos-container">
      <div className="lista-productos">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="producto-card"
            onClick={() => navigate(`/productos/${producto.id}`)}
          >
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p className="precio">{producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
