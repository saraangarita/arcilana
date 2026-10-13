import { Link } from "react-router-dom";
import useDocumentosMeta from "../ganchos/useDocumentosMeta.js";
import { COLECCION_ACTUAL } from "../datos/colecciones.js";
import { porColeccion } from "../datos/productos.js";
import TarjetaProducto from "../componentes/TarjetaProducto.jsx";
import CarruselResenas from "../componentes/CarruselResenas.jsx";

const IMAGENES_CATEGORIA = {
  aretes: "/img/prod-aretes.webp",
  collares: "/img/prod-caracoles.webp",
};

export default function Inicio() {
  useDocumentosMeta(
    "Inicio",
    "Accesorios de arcilla hechos a mano en Cartagena. Collares, aretes y piezas únicas de cerámica. A mano, con amor.",
  );

  return (
    <>
      <section className="hero">
        <img
          src="/img/hero-cartagena.jpg"
          alt="Daniela, fundadora de Arcilana, en las calles de Cartagena"
        />
        <div className="hero-texto">
          <div className="contenedor">
            <div className="hero-ctas">
              <Link
                className="btn btn-primario"
                to={`/productos?coleccion=${COLECCION_ACTUAL.id}`}
              >
                Ver colección
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* TIRA DE VALORES */}
      <div className="valores">
        <div className="contenedor">
          <div className="valor"></div>
          <div className="valor">
            <path d="M2.5 19 22 12 2.5 5 7 12l-4.5 7ZM7 12h15" />
          </div>
        </div>
      </div>
      <section className="seccion coleccion-sec" style={{ paddingTop: 1 }}>
        <div className="contenedor">
          <header className="col-home reveal">
            <h2 className="titulo-coleccion">
              {COLECCION_ACTUAL.lineas.map((linea) => (
                <span key={linea}>{linea}</span>
              ))}
            </h2>
            <p>{COLECCION_ACTUAL.descripcion1}</p>
          </header>

          <div className="grid-productos catalogo">
            {porColeccion(COLECCION_ACTUAL.id).map((p) => (
              <TarjetaProducto key={p.id} producto={p} />
            ))}
          </div>

          <p className="centrada-link"></p>
        </div>
      </section>
      <section className="seccion manifiesto" id="manifiesto">
        <svg
          className="flor-fondo"
          viewBox="0 0 100 100"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="50" cy="30" r="18" />
          <circle cx="30" cy="45" r="18" />
          <circle cx="70" cy="45" r="18" />
          <circle cx="38" cy="68" r="18" />
          <circle cx="62" cy="68" r="18" />
        </svg>
        <div className="contenedor reveal">
          <div className="overline claro">El corazón de lo que somos</div>
          <blockquote>
            “Creemos que la arcilla es un material mágico que transforma y llena
            el espíritu de la creatividad. Cada pieza tiene una historia que
            contar.”
          </blockquote>
          <Link className="btn btn-crema" to="/nosotros">
            Conócenos más
          </Link>
        </div>
      </section>
      {/* RESEÑAS */}
      <CarruselResenas />
    </>
  );
}
