// ═══════════════════════════════════════════════════════════
// ARCILANA · Colecciones (sistema de colecciones v3.1)
// Lanzar la colección N°2 = agregar un objeto aquí + sus
// productos con ese `coleccion`. Sin tocar componentes.
// ═══════════════════════════════════════════════════════════

export const COLECCIONES = {
  "la-magia-de-lo-cotidiano": {
    id: "la-magia-de-lo-cotidiano",
    nombre: "La Magia de lo Cotidiano",
    // Título en 3 líneas con letras espaciadas (el estilo que pidió la marca)
    lineas: ["La magia de lo cotidiano"],
    descripcion1:
      "Esta colección nace de la idea de encontrar belleza en los objetos y momentos que nos acompañan todos los días.",
    descripcion2:
      "Inspirada en la magia de lo cotidiano, transformando elementos sencillos en piezas de cerámica artesanal que invitan a mirar lo común con nuevos ojos y a descubrir el valor de los pequeños detalles.",
    // ⚠️ Foto provisional — reemplazar cuando lleguen las fotos reales de la colección
    foto: "/img/prod-caracoles.webp",
    vigente: true,
  },
};

// La colección que se muestra destacada en el inicio
export const COLECCION_ACTUAL =
  Object.values(COLECCIONES).find((c) => c.vigente) ||
  Object.values(COLECCIONES)[0];
