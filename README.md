# Arcilana Web · React + Vite

Sitio de Arcilana Studio — accesorios de arcilla hechos a mano (Cartagena, CO).

## Scripts

```bash
npm install   # instalar dependencias
npm run dev   # desarrollo (http://localhost:5173)
npm run build # build de producción en dist/
npm run preview
```

## Stack

React 18 · React Router 6 · CSS con tokens propios · Vite.
Sin backend: carrito en localStorage + checkout por WhatsApp.

## Estructura

```
src/
├── main.jsx · App.jsx · rutas.jsx        # entry, layout y rutas
├── styles/   tokens · base · componentes # design system
├── datos/    config · productos · resenas · politicas
├── contexto/ CarritoContexto.jsx         # carrito + localStorage + msg WhatsApp
├── ganchos/  useDocumentosMeta · useReveal
├── componentes/ TopBar · Header · NavMovil · Carrito · Footer
│               TarjetaProducto · FotoProducto · CarruselResenas · BotonWhatsApp
└── paginas/  Inicio · Productos · DetalleProducto · Nosotros
              Contacto · Politica · NoEncontrado
```

## Notas técnicas

- El catálogo vive en `src/datos/productos.js` (agregar pieza = copiar bloque).
- El carrito abre WhatsApp con el pedido formateado (`CarritoContexto.jsx`).
- `vercel.json` incluye rewrites SPA + headers de seguridad para Vercel.
- Fuentes locales en `public/fonts/` (Fraunces + DM Sans, licencia OFL).
- Colecciones futuras: cambiar `--acento`/`--acento-suave` en `tokens.css`.
