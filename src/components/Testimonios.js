import React, { useState } from "react";
import "../styles/Testimonios.css";

function Testimonios() {
  const testimonios = [
    {
      nombre: "Estefany",
      comentario:
        "He encontrado piezas únicas que no se encuentran en ningún otro lugar. Siempre es un placer ver las nuevas colecciones.",
    },
    {
      nombre: "María Fernanda",
      comentario:
        "Cada detalle refleja amor y dedicación. Se nota el trabajo artesanal en cada pieza.",
    },
    {
      nombre: "Laura Gómez",
      comentario:
        "La calidad es hermosa y el empaque es precioso. Sin duda volvería a comprar.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));
  };

  return (
    <section className="testimonios">
      <h2 className="testimonios-title">Lo que dicen nuestros clientes</h2>

      <div className="testimonios-card">
        <button className="arrow left" onClick={prev}>
          ‹
        </button>

        <div className="contenido">
          <p className="comentario">“{testimonios[index].comentario}”</p>
          <span className="cliente">— {testimonios[index].nombre}</span>
        </div>

        <button className="arrow right" onClick={next}>
          ›
        </button>
      </div>
    </section>
  );
}

export default Testimonios;
