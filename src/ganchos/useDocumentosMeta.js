import { useEffect } from "react";

export default function useDocumentosMeta(titulo, descripcion) {
  useEffect(() => {
    document.title = titulo
      ? `${titulo} · Arcilana`
      : "Arcilana · Accesorios de arcilla hechos a mano en Cartagena";

    if (descripcion) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = descripcion;
    }
  }, [titulo, descripcion]);
}
