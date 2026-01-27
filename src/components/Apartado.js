import React, { useState, useEffect } from "react";
import "../styles/Apartado.css";
import arrowLeft from "../Assets/circulo-de-flecha2.png"; 
import arrowRigth from "../Assets/circulo-de-flecha1.png"; 

import img1 from "../Assets/accesorios.png";
import img2 from "../Assets/accesorios.png";
import img3 from "../Assets/accesorios.png";

function Apartado() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  /* AUTOPLAY */
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); // ⏱ cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="apartado">
      <div
        className="apartado-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div className="apartado-slide" key={i}>
            <img src={img} alt={`apartado-${i}`} />
          </div>
        ))}
      </div>

      <button className="apartado-arrow left" onClick={prev}>
        <img src={arrowLeft} alt="Anterior"/>
      </button>

      <button className="apartado-arrow right" onClick={next}>
        <img src={arrowRigth} alt="Siguiente"/>
      </button>
    </section>
  );
}

export default Apartado;
