import { useSearchParams, Link } from "react-router-dom";
import useDocumentosMeta from "../ganchos/useDocumentosMeta.js";
import { PRODUCTOS } from "../datos/productos.js";
import { COLECCIONES } from "../datos/colecciones.js";
import TarjetaProducto from "../componentes/TarjetaProducto.jsx";
export default function Productos() {
  const [params] = useSearchParams();
  const idColeccion = params.get("coleccion");
  const coleccion = idColeccion ? COLECCIONES[idColeccion] : null;

  useDocumentosMeta(
    coleccion ? coleccion.nombre : "Productos",
    coleccion
      ? `${coleccion.descripcion1} Accesorios de cerámica hechos a mano en Cartagena.`
      : "Aretes, collares, anillos y sets de cerámica hechos a mano en Cartagena. Piezas únicas de Arcilana Studio.",
  );

  const lista = coleccion
    ? PRODUCTOS.filter((p) => p.coleccion === idColeccion)
    : PRODUCTOS;
  return (
    <section className="seccion pagina-catalogo">
      <div className="contenedor">
        {/* MODO COLECCIÓN: historia como protagonista */}
        {coleccion ? (
          <>
            <Link className="volver-tienda" to="/productos">
              ← Ver todo el catálogo
            </Link>
            <header className="col-cab reveal">
              <div className="overline">Colección</div>
              <h1 className="titulo-coleccion">
                {coleccion.lineas.map((linea) => (
                  <span key={linea}>{linea}</span>
                ))}
              </h1>
              <p>{coleccion.descripcion1}</p>
              <p>{coleccion.descripcion2}</p>
            </header>
          </>
        ) : (
          <>
            <div className="cab-seccion reveal columna">
              <div>
                <div className="overline">Catálogo</div>
                <h1 className="titulo-pagina">Todas las piezas</h1>
              </div>
              <span className="contador">
                {lista.length} {lista.length === 1 ? "pieza" : "piezas"}
              </span>
            </div>
          </>
        )}

        {lista.length === 0 ? (
          <p className="nota">Todavía no hay piezas aquí — vuelve pronto ✿</p>
        ) : (
          <div className="grid-productos catalogo">
            {lista.map((p) => (
              <TarjetaProducto key={p.id} producto={p} />
            ))}
          </div>
        )}

        <p className="nota">
          Cada pieza es única: si ves algo que te gusta, no tardes en pedirlo.
        </p>
      </div>
    </section>
  );
}
