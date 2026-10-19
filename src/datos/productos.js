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
    precio: 50000,
    precioAntes: null,
    imagenes: [
      { tipo: "producto", src: "/img/productos/espiral1.jpg" },
      { tipo: "producto", src: "/img/productos/espiral2.png" },
      { tipo: "producto", src: "/img/productos/espiral3.png" },
      { tipo: "producto", src: "/img/productos/espiral4.png" },
    ],
    colores: ["Verde petróleo", "Rosa"],
    material: "Cerámica esmaltada · poste de acero quirúrgico",
    descripcion:
      "Arete hecho en cerámica, con soporte en acero.\n" +
      "Los aretes nostalgia representan la capacidad de convertir un objeto cotidiano, muchas veces desechado, en un accesorio delicado y lleno de significado.\n" +
      "Medidas: 3 cm.",
    estado: "nuevo",
    personalizable: false,
  },
  {
    id: "collar-espiral",
    nombre: "Collar Espiral",
    categoria: "collares",
    coleccion: COLECCION_VIGENTE,
    precio: 65000,
    precioAntes: 48000,
    imagenes: [
      { tipo: "modelo", src: "/img/productos/espiralmodelo.jpg" },
      { tipo: "modelo", src: "/img/productos/collarespiral.png" },
    ],
    colores: ["Piedras naturales", "Caracol de cerámica"],
    material:
      "Piedras y mostacillas de vidrio · caracol central de cerámica esmaltada · cierre dorado",
    descripcion:
      "Dije hecho en ceramica, con broche en acero y piedras naturales.\n" +
      "Nos invita a confiar en nuestro propio ritmo, a disfrutar el recorrido y a entender que ir despacio no significa estar detenido. Porque muchas veces, mientras buscamos llegar a nuestro destino, olvidamos mirar todo lo bonito que ocurre en el camino.\n" +
      "Medidas: 3.2cm.",
    estado: "disponible",
    personalizable: false,
  },
  {
    id: "collar-fresa-nevada",
    nombre: "Collar Fresa Nevada",
    categoria: "collares",
    coleccion: COLECCION_VIGENTE,
    precio: 80000,
    precioAntes: null,
    imagenes: [
      { tipo: "modelo", src: "/img/productos/fresamodelo.jpg" },
      { tipo: "producto", src: "/img/productos/fresaproducto.png" },
    ],
    colores: ["Blanco", "Rojo", "Verde"],
    material:
      "Fresa de cerámica esmaltada · cuerda encerada roja · nudo ajustable",
    descripcion:
      "Dije hecho en cerámica,  sujetada de un cordón plano gamuzado de color rojo.\n" +
      "Una pequeña fresa que celebra la dulzura escondida en los momentos más simples. Un recordatorio de que lo cotidiano también puede ser extraordinario.\n" +
      "Medidas: 4cm.",
    estado: "nuevo",
    personalizable: false,
  },
  {
    id: "collar-jarron",
    nombre: "Collar Jarrón",
    categoria: "collares",
    coleccion: COLECCION_VIGENTE,
    precio: 80000,
    precioAntes: null,
    imagenes: [
      { tipo: "modelo", src: "/img/productos/jarronmodelo.jpg" },
      { tipo: "modelo", src: "/img/productos/jarronproducto.png" },
    ],
    colores: ["Rosado", "Verde"],
    material:
      "Jarroncito de cerámica esmaltada · cuerda encerada · nudo ajustable",
    descripcion:
      "Dije hecho en ceramica, sujetado de un cordón plano gamuzado de color café.\n" +
      "Una pieza que rinde homenaje a esos rincones cotidianos llenos de calma, memoria e inspiración, como lo es nuestro hogar\n" +
      "Medidas: 4 cm.",
    estado: "disponible",
    personalizable: false,
  },
  {
    id: "collar-miyuki",
    nombre: "Collar Miyuki",
    categoria: "collares",
    coleccion: COLECCION_VIGENTE,
    precio: 30000,
    precioAntes: null,
    imagenes: [
      { tipo: "modelo", src: "/img/productos/miyuki.jpg" },
      { tipo: "modelo", src: "/img/productos/collarmiyuki.png" },
    ],
    colores: ["Multicolor"],
    material: "Mostacillas miyuki tejidas a mano · cierre ajustable",
    descripcion:
      "Dije hecho en cerámica, con piedras miyuki japonesa, con hilo resistente y broches en acero.\n" +
      "Inspirado en los recuerdos que deja el mar, en su calma y en la belleza de encontrar algo especial en las cosas más sencillas.\n" +
      "Medidas: 3cm ",
    estado: "disponible",
    personalizable: false,
  },
];

export const porId = (id) => PRODUCTOS.find((p) => p.id === id);
export const porColeccion = (idColeccion) =>
  PRODUCTOS.filter((p) => p.coleccion === idColeccion);
export const descuentoDe = (p) =>
  p.precioAntes ? Math.round((1 - p.precio / p.precioAntes) * 100) : 0;
