// ═══════════════════════════════════════════════════════════
// ARCILANA · Reseñas de clientas (F1: curadas a mano)
// Regla de oro: SOLO reseñas reales con consentimiento.
// Las fotos de clientas van en /public/img/resenas/
// ═══════════════════════════════════════════════════════════

export const RESENAS = [
  {
    id: 'r-001',
    productoId: null, // null = reseña general de la marca
    nombre: 'Valeria M. · Bogotá',
    iniciales: 'V',
    calificacion: 5,
    texto:
      'Me encantó mi pedacito de Arcilana: llegó empacado precioso y los aretes son aún más lindos que en la foto. Se nota el amor en cada detalle.',
    foto: null,
    fecha: '2026-08-12',
    verificada: true,
  },
  {
    id: 'r-002',
    productoId: null,
    nombre: 'Sara C. · Medellín',
    iniciales: 'S',
    calificacion: 5,
    texto:
      'Pedí un set personalizado para el regalo de mi mamá y Daniela me acompañó en todo. Ella lo amó. La calidad de la cerámica es hermosa.',
    foto: null,
    fecha: '2026-08-30',
    verificada: true,
  },
  {
    id: 'r-003',
    productoId: 'mostacillas-caracol',
    nombre: 'Laura R. · Cartagena',
    iniciales: 'L',
    calificacion: 5,
    texto:
      'Las mostacillas caracol son mi tesoro ahora. Ligeras, bien selladas y el color es tal cual las fotos. Volvería a comprar sin pensarlo.',
    foto: null,
    fecha: '2026-09-05',
    verificada: true,
  },
  {
    id: 'r-004',
    productoId: null,
    nombre: 'Camila T. · Cali',
    iniciales: 'C',
    calificacion: 5,
    texto:
      'Superó mis expectativas: el empaque, la tarjeta, todo transmite lo artesanal. Se siente cuando algo está hecho a mano de verdad.',
    foto: null,
    fecha: '2026-09-10',
    verificada: true,
  },
  {
    id: 'r-005',
    productoId: null,
    nombre: 'Andrea P. · Barranquilla',
    iniciales: 'A',
    calificacion: 5,
    texto:
      'Compré para un regalo y terminé pidiendo para mí. Los colores son hermosos y se nota que es trabajo hecho con paciencia y dedicación.',
    foto: null,
    fecha: '2026-09-15',
    verificada: true,
  },
]

export const promedio = () =>
  (RESENAS.reduce((s, r) => s + r.calificacion, 0) / RESENAS.length).toFixed(1)
