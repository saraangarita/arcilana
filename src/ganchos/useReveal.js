import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const io = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visto");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );

    document
      .querySelectorAll(".reveal:not(.visto)")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}
