import React from "react";
import "../styles/Nosotros.css";
import a from "../Assets/a.png"; // usa el nombre real de tu imagen

function Nosotros() {
  return (
    <section className="nosotros">
      <div className="nosotros-content">
        <img
          src={a}
          alt="Pieza artesanal de cerámica"
          className="nosotros-img"
        />

        <p className="nosotros-text">
          Creemos que la arcilla es un material mágico que transforma y llena el
          espíritu de creatividad. Cada pieza cuenta una historia y conecta con
          la belleza de lo simple.
        </p>
      </div>
    </section>
  );
}

export default Nosotros;
