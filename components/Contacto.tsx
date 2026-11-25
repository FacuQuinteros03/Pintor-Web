import { cliente, linkWhatsapp } from "@/lib/datos";
import { IconoFacebook, IconoInstagram, IconoUbicacion, IconoWhatsapp } from "./iconos";

const pasos = [
  ["1", "Escribinos", "Contanos por WhatsApp qué necesitás y, si podés, mandá una foto del lugar."],
  ["2", "Presupuesto sin cargo", "Te pasamos el presupuesto sin costo."],
  ["3", "Manos a la obra", "Coordinamos el día y nos ponemos a pintar."],
];

export default function Contacto() {
  return (
    <section id="contacto" className="px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-tinta px-6 py-14 text-white sm:px-12 sm:py-20">
        {/* manchas de pintura de fondo */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-azul/40 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-turquesa/30 blur-3xl" aria-hidden="true" />

        <div className="relative grid gap-12 lg:grid-cols-2">
          <div data-reveal>
            <p className="font-pincel text-2xl text-lima">Contacto</p>
            <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              ¿Arrancamos con tu proyecto?
            </h2>
            <p className="mt-4 max-w-md text-lg text-white/70">
              La forma más rápida de pedir presupuesto es por WhatsApp. Respondemos personalmente.
            </p>
            <a
              href={linkWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-whatsapp px-7 py-4 text-lg font-semibold transition hover:-translate-y-0.5 hover:brightness-110"
            >
              <IconoWhatsapp className="h-6 w-6" /> {cliente.whatsappVisible}
            </a>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-white/80">
              <a href={cliente.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-lima">
                <IconoInstagram className="h-5 w-5" /> {cliente.instagramUsuario}
              </a>
              <a href={cliente.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-lima">
                <IconoFacebook className="h-5 w-5" /> Facebook
              </a>
              <span className="inline-flex items-center gap-2">
                <IconoUbicacion className="h-5 w-5" /> {cliente.zona}
              </span>
            </div>
          </div>

          <ol className="space-y-4">
            {pasos.map(([n, titulo, texto], i) => (
              <li
                key={n}
                data-reveal
                style={{ ["--delay" as string]: `${150 + i * 120}ms` }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lima font-display font-bold text-tinta">{n}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{titulo}</h3>
                  <p className="text-white/65">{texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
