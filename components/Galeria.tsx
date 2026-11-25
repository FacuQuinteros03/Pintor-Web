"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { categorias, trabajos, type Categoria } from "@/lib/datos";
import { IconoCerrar, IconoFlecha, Pincelada } from "./iconos";

const coloresRodillo = ["var(--color-turquesa)", "var(--color-bermellon)", "var(--color-amarillo)", "var(--color-turquesa)"];

export default function Galeria() {
  const [filtro, setFiltro] = useState<Categoria | "Todos">("Todos");
  const [abierta, setAbierta] = useState<number | null>(null);
  const dialogo = useRef<HTMLDialogElement>(null);
  const toqueX = useRef<number | null>(null);

  const visibles = filtro === "Todos" ? trabajos : trabajos.filter((t) => t.categoria === filtro);

  const mover = useCallback(
    (paso: number) => setAbierta((i) => (i === null ? i : (i + paso + visibles.length) % visibles.length)),
    [visibles.length],
  );

  useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (abierta !== null && !d.open) d.showModal();
    if (abierta === null && d.open) d.close();
  }, [abierta]);

  useEffect(() => {
    if (abierta === null) return;
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    addEventListener("keydown", tecla);
    return () => removeEventListener("keydown", tecla);
  }, [abierta, mover]);

  const actual = abierta !== null ? visibles[abierta] : null;

  return (
    <section id="trabajos" className="bg-pared-2/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div data-reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-pincel text-2xl text-bermellon">Trabajos realizados</p>
            <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              Paredes que{" "}
              <span className="pincelada">
                venden solas
                <Pincelada color="var(--color-turquesa)" />
              </span>
            </h2>
            <p className="mt-4 text-lg text-tinta-suave">
              Frentes, persianas, murales y vehículos pintados a mano en Rosario. Tocá una foto para verla en grande.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar trabajos">
            {(["Todos", ...categorias] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFiltro(c)}
                aria-pressed={filtro === c}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  filtro === c ? "bg-tinta text-white" : "bg-white text-tinta hover:bg-tinta/5"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <ul key={filtro} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibles.map((t, i) => (
            <li key={t.foto}>
              <button
                type="button"
                onClick={() => setAbierta(i)}
                className="group block w-full text-left focus-visible:outline-none"
                aria-label={`Ver en grande: ${t.titulo}`}
              >
                <figure
                  className="rodillo aspect-[4/3] rounded-2xl ring-bermellon ring-offset-2 ring-offset-pared group-focus-visible:ring-4"
                  style={{
                    ["--rodillo" as string]: coloresRodillo[i % coloresRodillo.length],
                    ["--delay" as string]: `${(i % 3) * 120}ms`,
                  }}
                >
                  <Image
                    src={`/fotos/${t.foto}-sm.webp`}
                    alt={t.alt}
                    width={t.ancho}
                    height={t.alto}
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 z-[1] rounded-b-2xl bg-gradient-to-t from-tinta/85 to-transparent p-4 pt-10 text-white">
                    <span className="block text-xs uppercase tracking-wider text-amarillo">{t.categoria}</span>
                    <span className="font-display font-semibold">{t.titulo}</span>
                  </figcaption>
                </figure>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogo}
        onClose={() => setAbierta(null)}
        onClick={(e) => e.target === e.currentTarget && setAbierta(null)}
        onTouchStart={(e) => (toqueX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (toqueX.current === null) return;
          const dx = e.changedTouches[0].clientX - toqueX.current;
          if (Math.abs(dx) > 50) mover(dx < 0 ? 1 : -1);
          toqueX.current = null;
        }}
        className="m-auto max-h-none max-w-none bg-transparent p-0 text-white backdrop:backdrop-blur-sm"
        aria-label="Visor de trabajos"
      >
        {actual && (
          <div className="flex h-dvh w-screen flex-col items-center justify-center gap-4 p-4 sm:p-10" onClick={(e) => e.target === e.currentTarget && setAbierta(null)}>
            <Image
              key={actual.foto}
              src={`/fotos/${actual.foto}.webp`}
              alt={actual.alt}
              width={actual.ancho}
              height={actual.alto}
              className="max-h-[78dvh] w-auto rounded-xl object-contain shadow-2xl"
              style={{ animation: "pintar-letras .6s cubic-bezier(.65,0,.35,1) forwards", clipPath: "inset(0 100% 0 0)" }}
            />
            <p className="text-center">
              <span className="font-display text-lg font-semibold">{actual.titulo}</span>
              <span className="ml-3 text-sm text-white/60">
                {abierta! + 1} / {visibles.length}
              </span>
            </p>
          </div>
        )}
        <button type="button" onClick={() => setAbierta(null)} className="fixed right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Cerrar">
          <IconoCerrar className="h-6 w-6" />
        </button>
        <button type="button" onClick={() => mover(-1)} className="fixed left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Anterior">
          <IconoFlecha className="h-6 w-6" />
        </button>
        <button type="button" onClick={() => mover(1)} className="fixed right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Siguiente">
          <IconoFlecha className="h-6 w-6 rotate-180" />
        </button>
      </dialog>
    </section>
  );
}
