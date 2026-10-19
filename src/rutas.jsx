import { Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio.jsx";
import Productos from "./paginas/Productos.jsx";
import DetalleProducto from "./paginas/DetalleProducto.jsx";
import Nosotros from "./paginas/Nosotros.jsx";
import Contacto from "./paginas/Contacto.jsx";
import Politica from "./paginas/Politica.jsx";
import NoEncontrado from "./paginas/NoEncontrado.jsx";

export default function Rutas({ alAbrirCarrito }) {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
      <Route
        path="/productos/:id"
        element={<DetalleProducto alAgregar={alAbrirCarrito} />}
      />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/envios" element={<Politica slug="envios" />} />
      <Route path="/cambios" element={<Politica slug="cambios" />} />
      <Route path="/cuidado" element={<Politica slug="cuidado" />} />
      <Route path="/privacidad" element={<Politica slug="privacidad" />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
}
