export const MARCA = {
  nombre: "Arcilana",
  firma: "Arcilana Studio",
  slogan: "A mano, con amor",
  ciudad: "Cartagena, Colombia",
  whatsapp: "573225099012",
  whatsappBonito: "+57 322 509 9012",
  email: "luzdanielaangarita@gmail.com",
  instagram: "https://www.instagram.com/arcilanastudio______",
  horario: [
    { dias: "Lunes a Viernes", horas: "9:00 AM – 6:00 PM" },
    { dias: "Sábado", horas: "Cerrado" },
    { dias: "Domingo", horas: "Cerrado" },
  ],
  anuncios: [
    "✿ A mano, con amor — piezas nuevas cada mes ✿",
    "Envíos a toda Colombia 🇨🇴",
    "¿Una idea especial? Pedidos personalizados ✿",
  ],
};

export function linkWhatsApp(mensaje) {
  return `https://wa.me/${MARCA.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export function fmt(precio) {
  return `$${precio.toLocaleString("es-CO")}`;
}
