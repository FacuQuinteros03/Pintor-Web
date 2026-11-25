import { cliente, linkWhatsapp } from "@/lib/datos";
import { IconoFacebook, IconoInstagram, IconoUbicacion, IconoWhatsapp } from "./iconos";

// Colores tomados de sus trabajos reales: pizzería Los 3 Nietos, taller Anchorena, cartel Los Príncipes
const pasos = [
  { n: "01", color: "#e8462b", nombre: "Naranja pizzería", titulo: "Escribinos", texto: "Contanos por WhatsApp qué necesitás y, si podés, mandá una foto del lugar." },
  { n: "02", color: "#f2b630", nombre: "Amarillo taller", titulo: "Presupuesto sin cargo", texto: "Te pasamos el presupuesto sin costo." },
  { n: "03", color: "#1ba3a8", nombre: "Turquesa cartel", titulo: "Manos a la obra", texto: "Coordinamos el día y nos ponemos a pintar." },
];

/** Cinta de pintor pegando el cartel a la pared */
const Cinta = ({ className }: { className: string }) => (
  <span
    aria-hidden="true"
    className={`absolute z-10 h-7 w-24 bg-[#e9dcb8]/85 shadow-sm [clip-path:polygon(3%_0,97%_4%,100%_100%,0_94%)] ${className}`}
  />
);

export default function Contacto() {
  return (
    <section id="contacto" className="overflow-x-clip px-4 pb-20 pt-4 sm:px-6 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* El cartel: fondo hueso, doble filete y letras como las que pinta Cristian */}
        <div data-reveal className="relative">
          <Cinta className="-left-3 -top-3 -rotate-12" />
          <Cinta className="-right-3 -top-3 rotate-12" />
          <div className="cartel-pintado relative -rotate-1 bg-[#fbf6e9] p-3 shadow-[0_18px_40px_-18px_rgb(15_27_45/0.45)]">
            <div className="border-[3px] border-tinta p-1.5">
              <div className="border border-tinta px-6 py-10 text-center sm:px-10 sm:py-12">
                <p className="font-pincel text-3xl text-[#e8462b] sm:text-4xl">¿Arrancamos con tu proyecto?</p>
                <h2 className="mt-2 font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-tinta sm:text-6xl">
                  Pedí tu presupuesto
                </h2>
                <p className="mt-3 inline-block -rotate-2 bg-[#f2b630] px-4 py-1 font-display text-lg font-extrabold uppercase tracking-wide text-tinta">
                  sin cargo
                </p>

                <a
                  href={linkWhatsapp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 flex items-center justify-center gap-3 text-tinta transition hover:text-whatsapp"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-whatsapp text-white transition group-hover:scale-110 sm:h-14 sm:w-14">
                    <IconoWhatsapp className="h-7 w-7 sm:h-8 sm:w-8" />
                  </span>
                  <span className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">{cliente.whatsappVisible}</span>
                </a>
                <p className="mt-2 text-sm text-tinta-suave">Tocá el número y te abre WhatsApp</p>

                <div className="mx-auto mt-8 h-px w-2/3 bg-tinta/20" aria-hidden="true" />

                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-tinta">
                  <a href={cliente.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium hover:text-[#e8462b]">
                    <IconoInstagram className="h-5 w-5" /> {cliente.instagramUsuario}
                  </a>
                  <a href={cliente.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium hover:text-[#e8462b]">
                    <IconoFacebook className="h-5 w-5" /> Facebook
                  </a>
                  <span className="inline-flex items-center gap-2 font-medium">
                    <IconoUbicacion className="h-5 w-5" /> {cliente.zona}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Los pasos como muestras de color de pinturería */}
        <div>
          <p data-reveal className="font-pincel text-2xl text-[#e8462b]">Cómo trabajamos</p>
          <ol className="mt-4 space-y-5">
            {pasos.map((p, i) => (
              <li
                key={p.n}
                data-reveal
                style={{ ["--delay" as string]: `${150 + i * 140}ms`, rotate: `${[-1.2, 0.8, -0.5][i]}deg` }}
                className="muestra flex overflow-hidden rounded-md bg-white shadow-[0_10px_24px_-14px_rgb(15_27_45/0.5)]"
              >
                <div className="muestra-color relative flex w-24 shrink-0 flex-col justify-between p-3 sm:w-28" style={{ background: p.color }}>
                  <span className="font-display text-2xl font-extrabold text-white/95">{p.n}</span>
                  <span className="text-[10px] font-semibold uppercase leading-tight tracking-wider text-white/85">{p.nombre}</span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-display text-lg font-bold">{p.titulo}</h3>
                  <p className="mt-1 text-tinta-suave">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
