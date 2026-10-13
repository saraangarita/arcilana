import { RESENAS, promedio } from "../datos/resenas.js";

// Carrusel horizontal de reseñas (scroll-snap: swipe en móvil)
export default function CarruselResenas() {
  return (
    <section className="seccion" id="resenas">
      <div className="contenedor">
        <div className="cab-seccion reveal columna">
          <div>
            <div className="overline">Lo que dicen</div>
            <h2 className="titulo-resenas">Clientas reales, amor real</h2>
          </div>
          <div className="sello">
            <span className="estrellas">★★★★★</span>
            <span>{promedio()}/5 · clientas verificadas de Arcilana</span>
          </div>
        </div>

        <div className="carrusel-resenas reveal">
          {RESENAS.map((r) => (
            <article className="resena" key={r.id}>
              <div
                className="estrellas"
                aria-label={`${r.calificacion} de 5 estrellas`}
              >
                {"★".repeat(r.calificacion)}
              </div>
              {r.foto && (
                <img
                  className="resena-foto"
                  src={r.foto}
                  alt={`Foto de ${r.nombre}`}
                  loading="lazy"
                />
              )}
              <p>“{r.texto}”</p>
              <div className="quien">
                <div className="avatar">{r.iniciales}</div>
                <div>
                  <div className="nombre">{r.nombre}</div>
                  {r.verificada && (
                    <span className="chip-verificada">Compra verificada</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="nota">
          Reseñas reales recolectadas después de cada entrega. Si compraste,
          cuéntanos tu experiencia por WhatsApp 💛
        </p>
      </div>
    </section>
  );
}
