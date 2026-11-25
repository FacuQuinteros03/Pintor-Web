import Image from "next/image";
import { cliente, linkWhatsapp } from "@/lib/datos";
import { IconoUbicacion, IconoWhatsapp, Pincelada } from "./iconos";

// Gotas en los colores del logo que flotan alrededor de la foto
const gotas = [
  { c: "var(--color-amarillo)", x: "-6%", y: "8%", s: 34, d: "0s" },
  { c: "var(--color-turquesa)", x: "92%", y: "18%", s: 24, d: "1.2s" },
  { c: "var(--color-turquesa)", x: "88%", y: "82%", s: 40, d: "2.1s" },
  { c: "var(--color-bermellon)", x: "-4%", y: "70%", s: 20, d: "0.6s" },
];

export default function Portada() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-tinta pb-28 pt-28 text-white sm:pt-32 lg:pb-36">
      <Image
        src="/fotos/paredArmus.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-tinta/40 via-tinta/80 to-tinta" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p data-reveal className="visible mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
            <IconoUbicacion className="h-4 w-4 text-amarillo" /> {cliente.oficio} en {cliente.zona}
          </p>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="letras-a-mano block font-pincel text-6xl font-normal text-amarillo sm:text-8xl">
              {cliente.nombre}
            </span>
            <span className="mt-2 block">
              Pintor{" "}
              <span className="pincelada">
                profesional
                <Pincelada color="var(--color-bermellon)" />
              </span>
            </span>
          </h1>

          <p data-reveal className="mt-6 max-w-xl text-lg text-white/75" style={{ ["--delay" as string]: "300ms" }}>
            Pintura, cartelería y letras a mano para comercios, casas y vehículos. Además, soldadura, carpintería y
            albañilería con un equipo de confianza.
          </p>

          <div data-reveal className="mt-8 flex flex-wrap gap-3" style={{ ["--delay" as string]: "450ms" }}>
            <a
              href={linkWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-white shadow-lg shadow-whatsapp/30 transition hover:-translate-y-0.5 hover:brightness-110"
            >
              <IconoWhatsapp className="h-5 w-5" /> Pedí tu presupuesto sin cargo
            </a>
            <a
              href="#trabajos"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 font-semibold transition hover:bg-white/10"
            >
              Ver trabajos
            </a>
          </div>

          <dl data-reveal className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6" style={{ ["--delay" as string]: "600ms" }}>
            {[
              ["+20", "años de oficio"],
              ["5", "rubros"],
              ["$0", "presupuesto"],
            ].map(([valor, etiqueta]) => (
              <div key={etiqueta}>
                <dt className="sr-only">{etiqueta}</dt>
                <dd className="font-display text-2xl font-bold text-white sm:text-3xl">{valor}</dd>
                <dd className="text-sm text-white/60">{etiqueta}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          {gotas.map((g, i) => (
            <svg
              key={i}
              viewBox="0 0 24 32"
              className="gota absolute z-10"
              style={{ left: g.x, top: g.y, width: g.s, ["--delay" as string]: g.d }}
              aria-hidden="true"
            >
              <path d="M12 0C12 0 0 14 0 21a12 12 0 0 0 24 0C24 14 12 0 12 0z" fill={g.c} />
            </svg>
          ))}
          <figure className="rodillo rotate-2 rounded-3xl shadow-2xl shadow-black/50" style={{ ["--rodillo" as string]: "var(--color-amarillo)" }}>
            <Image
              src="/fotos/pintando.webp"
              alt="Cristian delineando letras gigantes sobre la pared de Armus CrossFit"
              width={720}
              height={1280}
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>
          <figure
            className="rodillo absolute -bottom-10 -left-8 w-1/2 -rotate-3 rounded-2xl border-4 border-tinta shadow-xl sm:-left-14"
            style={{ ["--rodillo" as string]: "var(--color-turquesa)", ["--delay" as string]: "350ms" }}
          >
            <Image
              src="/fotos/pizzeria-sm.webp"
              alt="Frente de la pizzería Los 3 Nietos pintado a mano"
              width={641}
              height={505}
              sizes="220px"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </div>
      </div>

      {/* chorreado de pintura sobre la sección siguiente */}
      <svg
        className="chorreado absolute -bottom-px left-0 h-16 w-full text-pared sm:h-24"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0 100 V60 Q300 40 600 62 T1200 55 V100 Z" style={{ ["--delay" as string]: "0s" }} />
        {[90, 260, 410, 640, 820, 1010, 1130].map((x, i) => (
          <path
            key={x}
            fill="var(--color-tinta)"
            d={`M${x - 14} 0 h28 v${30 + (i % 3) * 14} a14 14 0 0 1 -28 0 Z`}
            style={{ ["--delay" as string]: `${1.4 + i * 0.12}s` }}
          />
        ))}
      </svg>
    </section>
  );
}
