import { Link } from "react-router-dom";
import useDocumentosMeta from "../ganchos/useDocumentosMeta.js";
import { COLECCION_ACTUAL } from "../datos/colecciones.js";
import { porColeccion } from "../datos/productos.js";
import TarjetaProducto from "../componentes/TarjetaProducto.jsx";
import CarruselResenas from "../componentes/CarruselResenas.jsx";
import BotonWhatsApp from "../componentes/BotonWhatsApp.jsx";

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
      {/* HERO — v3.3: sin texto sobre la foto, solo el botón centrado */}
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
      {/* COLECCIÓN VIGENTE — protagonismo inmediato: nombre + descripción
          breve + los productos, como "El Jardín" de la referencia */}
      <section className="seccion coleccion-sec" style={{ paddingTop: 56 }}>
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
          <p>
            Somos un estudio cartagenero donde cada accesorio se amasa, se pinta
            y se hornea a mano. Sin moldes en serie, sin prisa: la belleza de lo
            simple.
          </p>
          <Link className="btn btn-crema" to="/nosotros">
            Conócenos más
          </Link>
        </div>
      </section>
      {/* PEDIDOS ESPECIALES */}
      <section className="seccion especiales-sec">
        <div className="contenedor">
          <div className="especiales reveal">
            <div>
              <div className="overline">Pedidos especiales</div>
              <h2>¿Tienes una idea en mente?</h2>
              <p>
                Creamos piezas personalizadas para regalos, novias, marcas y
                momentos únicos. Cuéntanos tu idea y la hacemos realidad, a mano
                y con amor.
              </p>
            </div>
            <BotonWhatsApp mensaje="Hola Arcilana ✿ tengo una idea para un pedido especial ✿">
              Escríbenos
            </BotonWhatsApp>
          </div>
        </div>
      </section>
      {/* RESEÑAS */}
      <CarruselResenas />
    </>
  );
}
