import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { porId } from "../datos/productos.js";
import { MARCA, fmt, linkWhatsApp } from "../datos/config.js";

const CarritoContexto = createContext(null);
const CLAVE = "arcilana-carrito";

export function CarritoProveedor({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(CLAVE)) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CLAVE, JSON.stringify(items));
  }, [items]);

  const agregar = (id, cantidad = 1) =>
    setItems((prev) => {
      const existe = prev.find((i) => i.id === id);
      return existe
        ? prev.map((i) =>
            i.id === id ? { ...i, cantidad: i.cantidad + cantidad } : i,
          )
        : [...prev, { id, cantidad }];
    });

  const cambiarCantidad = (id, delta) =>
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, cantidad: i.cantidad + delta } : i))
        .filter((i) => i.cantidad > 0),
    );

  const quitar = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const vaciar = () => setItems([]);

  const total = items.reduce((s, i) => {
    const p = porId(i.id);
    return p ? s + p.precio * i.cantidad : s;
  }, 0);
  const cantidadTotal = items.reduce((s, i) => s + i.cantidad, 0);

  const mensajeWhatsApp = () => {
    const lineas = items
      .map((i) => {
        const p = porId(i.id);
        return p
          ? `• ${i.cantidad}× ${p.nombre} (${fmt(p.precio * i.cantidad)})`
          : null;
      })
      .filter(Boolean);
    return linkWhatsApp(
      `Hola ${MARCA.nombre} ✿ ${MARCA.slogan} — quiero pedir:\n${lineas.join(
        "\n",
      )}\n\nTotal: ${fmt(total)}\n¿Me confirmas disponibilidad y envío?`,
    );
  };

  const valor = useMemo(
    () => ({
      items,
      agregar,
      cambiarCantidad,
      quitar,
      vaciar,
      total,
      cantidadTotal,
      mensajeWhatsApp,
    }),
    [items],
  );

  return (
    <CarritoContexto.Provider value={valor}>
      {children}
    </CarritoContexto.Provider>
  );
}

export const useCarrito = () => useContext(CarritoContexto);
