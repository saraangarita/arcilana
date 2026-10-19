import { useState } from "react";
import Rutas from "./rutas.jsx";
import TopBar from "./componentes/TopBar.jsx";
import Header from "./componentes/Header.jsx";
import Footer from "./componentes/Footer.jsx";
import NavMovil from "./componentes/NavMovil.jsx";
import Carrito from "./componentes/Carrito.jsx";
import useReveal from "./ganchos/useReveal.js";

export default function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  useReveal();

  return (
    <>
      <TopBar />
      <Header
        alAbrirMenu={() => setMenuAbierto(true)}
        alAbrirCarrito={() => setCarritoAbierto(true)}
      />
      <main>
        <Rutas alAbrirCarrito={() => setCarritoAbierto(true)} />
      </main>
      <Footer />
      <NavMovil abierto={menuAbierto} alCerrar={() => setMenuAbierto(false)} />
      <Carrito
        abierto={carritoAbierto}
        alCerrar={() => setCarritoAbierto(false)}
      />

      <a
        className="wa-fab"
        href="https://wa.me/573225099012?text=Hola%20Arcilana%20%E2%9C%BF%20quiero%20preguntar%20por%20sus%20piezas"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4-.1.6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3.1.2.1.7-.1 1.2Z" />
        </svg>
      </a>
    </>
  );
}
