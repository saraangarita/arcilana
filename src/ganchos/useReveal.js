import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 1) Vuelve arriba al cambiar de ruta.
// 2) Observa los elementos .reveal y los hace aparecer al entrar
//    en pantalla (animación suave de todo el sitio).
export default function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    const io = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visto')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )

    document.querySelectorAll('.reveal:not(.visto)').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}
