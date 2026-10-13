import useDocumentosMeta from "../ganchos/useDocumentosMeta.js";
export default function Nosotros() {
  useDocumentosMeta(
    "Nosotros",
    "La historia detrás de Arcilana Studio: una marca cartagenera de accesorios de arcilla hechos a mano, donde cada pieza tiene un pedacito de corazón.",
  );
  return (
    <section className="seccion pagina-nosotros">
      <div className="contenedor">
        <img
          className="nosotros-tarjeta"
          src="/img/nosotros-tarjeta-1.jpg"
          alt="Nosotros: Daniela, fundadora de Arcilana, y el manifiesto de la marca — Somos una marca de accesorios artesanales, creada para expresar creatividad, autenticidad e identidad a través de piezas hechas a mano."
        />

        <img
          className="nosotros-tarjeta"
          src="/img/nosotros-tarjeta-2.jpg"
          alt="La historia de Arcilana Studio: cada pieza es elaborada a mano, dedicando tiempo y atención a cada detalle. Creemos que los accesorios pueden representar gustos, recuerdos, emociones y pequeñas partes de nuestra identidad."
        />
      </div>
    </section>
  );
}
