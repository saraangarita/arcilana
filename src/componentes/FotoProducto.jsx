export default function FotoProducto({ producto, mini = false }) {
  const src = producto?.imagenes?.[0]?.src;
  if (src) {
    return <img src={src} alt={producto.nombre} loading="lazy" />;
  }
  return (
    <div
      className={`foto-vacio ${mini ? "mini" : ""}`}
      role="img"
      aria-label={producto?.nombre || "Producto Arcilana"}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
      >
        <circle cx="50" cy="32" r="14" />
        <circle cx="31" cy="46" r="14" />
        <circle cx="69" cy="46" r="14" />
        <circle cx="38" cy="68" r="14" />
        <circle cx="62" cy="68" r="14" />
      </svg>
    </div>
  );
}
