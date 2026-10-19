import { useRef, useState } from "react";

export default function ZoomImagen({ src, alt }) {
  const ref = useRef(null);
  const [zoom, setZoom] = useState(false);
  const [origen, setOrigen] = useState("50% 50%");
  const [lightbox, setLightbox] = useState(false);

  const mover = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setOrigen(`${x}% ${y}%`);
  };

  return (
    <>
      <div
        ref={ref}
        className="zoom-contenedor"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={mover}
        onClick={() => setLightbox(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setLightbox(true)}
        aria-label={`${alt} — ampliar foto`}
      >
        <img
          src={src}
          alt={alt}
          style={{
            transformOrigin: origen,
            transform: zoom ? "scale(2.1)" : "scale(1)",
          }}
        />
        <span className="zoom-pista" aria-hidden="true">
          🔍
        </span>
      </div>

      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
        >
          <img src={src} alt={alt} />
          <button className="lightbox-cerrar" aria-label="Cerrar foto ampliada">
            ✕
          </button>
        </div>
      )}
    </>
  );
}
