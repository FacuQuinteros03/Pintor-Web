"use client";

import { useEffect } from "react";

/**
 * Un solo IntersectionObserver para toda la página: cuando un elemento con
 * [data-reveal] o .pincelada o .rodillo entra en pantalla, le suma la clase "visible"
 * y las animaciones CSS hacen el resto. También mueve la barra de progreso.
 */
export default function Revelado() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    const observar = () =>
      document
        .querySelectorAll("[data-reveal]:not(.visible), .pincelada:not(.visible), .rodillo:not(.visible)")
        .forEach((el) => observer.observe(el));
    observar();
    // la galería cambia al filtrar: volvemos a observar lo nuevo
    const mutaciones = new MutationObserver(observar);
    mutaciones.observe(document.body, { childList: true, subtree: true });

    const barra = document.getElementById("progreso");
    let pendiente = false;
    const alScrollear = () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight;
        barra?.style.setProperty("--progreso", String(max > 0 ? scrollY / max : 0));
        pendiente = false;
      });
    };
    addEventListener("scroll", alScrollear, { passive: true });
    alScrollear();

    return () => {
      observer.disconnect();
      mutaciones.disconnect();
      removeEventListener("scroll", alScrollear);
    };
  }, []);

  return null;
}
