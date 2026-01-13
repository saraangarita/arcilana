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
          espíritu de la creatividad. Cada pieza tiene una historia que contar,
          al conectar con la belleza de lo simple.
        </p>

        <p className="nosotros-text">
          Para mí, la arcilla es más que un material, es una extensión de mi
          infancia, de esos momentos en que pintaba con colores vibrantes y
          dejaba volar la imaginación. Trabajar con mis manos ha sido mi
          refugio.
        </p>

        <p className="nosotros-text">
          Cada trazo, cada textura, cada detalle está impregnado de mi esencia y
          de la pasión por crear algo único. En cada pieza hay un pedacito de mi
          corazón y el deseo de inspirarte a crear.
        </p>
      </div>
    </section>
  );
}

export default Nosotros;
