import React, { useState, useEffect } from "react";
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

  /* AUTOPLAY */
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonios">
      <h2 className="testimonios-title">LO QUE DICEN NUESTROS CLIENTES</h2>

      <div className="testimonios-card">
        <div className="testimonios-viewport">
          <div
            className="testimonios-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonios.map((item, i) => (
              <div className="testimonio-slide" key={i}>
                <p className="comentario">“{item.comentario}”</p>
                <span className="cliente">— {item.nombre}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow left" onClick={prev}>
          ‹
        </button>
        <button className="arrow right" onClick={next}>
          ›
        </button>
      </div>
    </section>
  );
}

export default Testimonios;
