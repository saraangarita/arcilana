import useDocumentosMeta from "../ganchos/useDocumentosMeta.js";
import { POLITICAS } from "../datos/politicas.js";

// Página genérica para envíos / cambios / cuidado / privacidad.
// El contenido vive en datos/politicas.js
export default function Politica({ slug }) {
  const pagina = POLITICAS[slug];
  useDocumentosMeta(pagina.titulo, pagina.intro);

  return (
    <section className="seccion pagina-politica">
      <div className="contenedor angosto">
        <div className="cab-seccion reveal columna">
          <div>
            <div className="overline">Información útil</div>
            <h1 className="titulo-pagina">{pagina.titulo}</h1>
          </div>
        </div>
        <p className="politica-intro reveal">{pagina.intro}</p>
        {pagina.bloques.map((b) => (
          <div className="politica-bloque reveal" key={b.subtitulo}>
            <h2>{b.subtitulo}</h2>
            {b.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
