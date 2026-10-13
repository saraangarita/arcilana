export const MARCA = {
  nombre: "Arcilana",
  firma: "Arcilana Studio",
  slogan: "A mano, con amor",
  ciudad: "Cartagena, Colombia",
  whatsapp: "573225099012", // formato internacional sin "+" ni espacios
  whatsappBonito: "+57 322 509 9012",
  email: "luzdanielaangarita@gmail.com",
  instagram: "https://instagram.com/arcilana", // ⚠️ pendiente: usuario real
  horario: [
    { dias: "Lunes a Viernes", horas: "9:00 AM – 6:00 PM" },
    { dias: "Sábado", horas: "Cerrado" },
    { dias: "Domingo", horas: "Cerrado" },
  ],
  // Mensajes rotativos de la barra superior
  anuncios: [
    "✿ A mano, con amor — piezas nuevas cada mes ✿",
    "Envíos a toda Colombia 🇨🇴",
    "¿Una idea especial? Pedidos personalizados ✿",
  ],
};

// Arma un enlace wa.me con mensaje pre-cargado
export function linkWhatsApp(mensaje) {
  return `https://wa.me/${MARCA.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

// Formatea precios en COP: 35000 -> "$35.000"
export function fmt(precio) {
  return `$${precio.toLocaleString("es-CO")}`;
}
