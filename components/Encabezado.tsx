"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cliente, linkWhatsapp } from "@/lib/datos";
import { IconoCerrar, IconoMenu, IconoWhatsapp } from "./iconos";

const links = [
  { href: "#servicios", texto: "Servicios" },
  { href: "#trabajos", texto: "Trabajos" },
  { href: "#sobre-mi", texto: "Sobre mí" },
  { href: "#contacto", texto: "Contacto" },
];

export default function Encabezado() {
  const [abierto, setAbierto] = useState(false);
  const [scrolleado, setScrolleado] = useState(false);

  useEffect(() => {
    const f = () => setScrolleado(scrollY > 40);
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
  }, [abierto]);

  const fondo = scrolleado || abierto;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        fondo ? "bg-pared/90 text-tinta shadow-sm backdrop-blur" : "bg-transparent text-white"
      }`}
    >
      {/* barra de progreso de lectura, pintada con los colores del logo */}
      <div
        id="progreso"
        className="progreso-pincel absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amarillo via-turquesa to-bermellon"
        aria-hidden="true"
      />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2" onClick={() => setAbierto(false)}>
          <Image src="/logo.webp" alt="" width={44} height={32} priority />
          <span className="font-display text-lg font-bold tracking-tight">{cliente.nombre}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium opacity-90 transition hover:opacity-100 hover:text-turquesa">
              {l.texto}
            </a>
          ))}
          <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            <IconoWhatsapp className="h-4 w-4" /> Presupuesto
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full md:hidden"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          onClick={() => setAbierto((a) => !a)}
        >
          {abierto ? <IconoCerrar className="h-6 w-6" /> : <IconoMenu className="h-6 w-6" />}
        </button>
      </div>

      {abierto && (
        <nav id="menu-movil" className="h-[calc(100dvh-4rem)] bg-pared px-6 pt-6 md:hidden" aria-label="Móvil">
          <ul className="space-y-1">
            {links.map((l, i) => (
              <li key={l.href} data-reveal className="visible" style={{ ["--delay" as string]: `${i * 60}ms` }}>
                <a href={l.href} onClick={() => setAbierto(false)} className="block py-3 font-display text-3xl font-bold">
                  {l.texto}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white"
          >
            <IconoWhatsapp className="h-5 w-5" /> Pedí tu presupuesto
          </a>
        </nav>
      )}
    </header>
  );
}
