// ═══════════════════════════════════════════════════════════
// ARCILANA · Catálogo — Colección "La Magia de lo Cotidiano"
// Fotos reales de la marca (productos/).
// ⚠️ PRECIOS DE EJEMPLO — reemplazar por los reales.
//
// Cómo manejar cada cosa:
// • DESCUENTO → agrega `precioAntes` (se muestra tachado + badge "-%" calculado
//   solo). Para quitar el descuento, borra `precioAntes`.
// • AGOTADO   → `estado: 'agotado'` (se pone el velo "Agotado" y se
//   desactivan los botones). Otros estados: 'nuevo' | 'disponible'.
// • FOTOS     → `imagenes: [{ tipo: 'modelo'|'producto', src }]`
//   En las tarjetas: se muestra la de "modelo" y al pasar el mouse
//   cambia a la de "producto". En el detalle se pueden ver todas con zoom.
// ═══════════════════════════════════════════════════════════

export const CATEGORIAS = [
  { id: "aretes", nombre: "Aretes" },
  { id: "collares", nombre: "Collares" },
  { id: "anillos", nombre: "Anillos" },
  { id: "sets", nombre: "Sets" },
];

export const COLECCION_VIGENTE = "la-magia-de-lo-cotidiano";

export const PRODUCTOS = [
  {
    id: "aretes-nostalgia",
    nombre: "Aretes Nostalgia",
    categoria: "aretes",
    coleccion: COLECCION_VIGENTE,
    precio: 35000, // ⚠️ precio de ejemplo
    precioAntes: null, // ej: 42000 → muestra "-17%" y precio tachado
    imagenes: [
      { tipo: "producto", src: "/img/productos/espiral1.jpg" },
      { tipo: "producto", src: "/img/productos/espiral2.png" },
      { tipo: "producto", src: "/img/productos/espiral3.png" },
      { tipo: "producto", src: "/img/productos/espiral4.png" },
    ],
    colores: ["Verde petróleo", "Rosa"],
    material: "Cerámica esmaltada · poste de acero quirúrgico",
    descripcion:
      "Los aretes nostalgia representan la capacidad de convertir un objeto cotidiano, muchas veces desechado, en un accesorio delicado y lleno de significado.",
    estado: "nuevo", // nuevo | disponible | agotado
    personalizable: false,
  },
  {
    id: "collar-espiral",
    nombre: "Collar Espiral",
    categoria: "collares",
    coleccion: COLECCION_VIGENTE,
    precio: 40000, // ⚠️ precio de ejemplo
    precioAntes: 48000, // ⚠️ descuento de EJEMPLO para probar la funcionalidad — borrar si no aplica
    imagenes: [
      { tipo: "modelo", src: "/img/productos/espiralmodelo.jpg" },
      { tipo: "modelo", src: "/img/productos/collarespiral.png" },
      // { tipo: "producto", src: "/img/productos/espiral-producto.webp" },
    ],
    colores: ["Piedras naturales", "Caracol de cerámica"],
    material:
      "Piedras y mostacillas de vidrio · caracol central de cerámica esmaltada · cierre dorado",
    descripcion:
      "Nos invita a confiar en nuestro propio ritmo, a disfrutar el recorrido y a entender que ir despacio no significa estar detenido. Porque muchas veces, mientras buscamos llegar a nuestro destino, olvidamos mirar todo lo bonito que ocurre en el camino.",
    estado: "disponible",
    personalizable: false,
  },
  {
    id: "collar-fresa-nevada",
    nombre: "Collar Fresa Nevada",
    categoria: "collares",
    coleccion: COLECCION_VIGENTE,
    precio: 45000, // ⚠️ precio de ejemplo
    precioAntes: null,
    imagenes: [
      { tipo: "modelo", src: "/img/productos/fresamodelo.jpg" },
      { tipo: "producto", src: "/img/productos/fresaproducto.png" },
    ],
    colores: ["Blanco", "Rojo", "Verde"],
    material:
      "Fresa de cerámica esmaltada · cuerda encerada roja · nudo ajustable",
    descripcion:
      "Una pequeña fresa que celebra la dulzura escondida en los momentos más simples. Un recordatorio de que lo cotidiano también puede ser extraordinario.",
    estado: "nuevo",
    personalizable: false,
  },
  {
    id: "collar-jarron",
    nombre: "Collar Jarrón",
    categoria: "collares",
    coleccion: COLECCION_VIGENTE,
    precio: 45000, // ⚠️ precio de ejemplo
    precioAntes: null,
    imagenes: [
      { tipo: "modelo", src: "/img/productos/jarronmodelo.jpg" },
      { tipo: "modelo", src: "/img/productos/jarronproducto.jpg" },
      // ⚠️ pendiente: foto "producto solo" del collar jarrón
    ],
    colores: ["Rosado", "Verde"],
    material:
      "Jarroncito de cerámica esmaltada · cuerda encerada · nudo ajustable",
    descripcion:
      "Una pieza que rinde homenaje a esos rincones cotidianos llenos de calma, memoria e inspiración, como lo es nuestro “hogar”.",
    estado: "disponible",
    personalizable: false,
  },
  {
    id: "collar-miyuki",
    nombre: "Collar Miyuki",
    categoria: "collares",
    coleccion: COLECCION_VIGENTE,
    precio: 38000, // ⚠️ precio de ejemplo
    precioAntes: null,
    imagenes: [
      { tipo: "modelo", src: "/img/productos/miyuki.jpg" },
      { tipo: "modelo", src: "/img/productos/collarmiyuki.png" },
    ],
    colores: ["Multicolor"], // ⚠️ provisional
    material: "Mostacillas miyuki tejidas a mano · cierre ajustable", // ⚠️ provisional
    descripcion:
      "Tejido a mano mostacilla a mostacilla, un accesorio pequeño que acompaña tu día a día con color. ⚠️ Descripción provisional — reemplazar por el texto de la marca.",
    estado: "disponible",
    personalizable: false,
  },
  {
    id: "pieza-personalizada",
    nombre: "Pieza Personalizada",
    categoria: "sets",
    coleccion: "especiales",
    precio: 50000, // ⚠️ ejemplo — "desde"
    precioAntes: null,
    imagenes: [],
    colores: ["A tu gusto"],
    material: "Cerámica esmaltada · diseño acordado contigo",
    descripcion:
      "¿Tienes una idea para un regalo, novias o tu marca? La diseñamos y creamos juntas, a mano y con amor.",
    estado: "disponible",
    personalizable: true,
  },
];

// Helpers
export const porId = (id) => PRODUCTOS.find((p) => p.id === id);
export const porColeccion = (idColeccion) =>
  PRODUCTOS.filter((p) => p.coleccion === idColeccion);
export const descuentoDe = (p) =>
  p.precioAntes ? Math.round((1 - p.precio / p.precioAntes) * 100) : 0;
