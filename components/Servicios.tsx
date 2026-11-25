import Image from "next/image";
import { linkWhatsapp, servicios } from "@/lib/datos";
import { Pincelada } from "./iconos";

export default function Servicios() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div data-reveal className="max-w-2xl">
        <p className="font-pincel text-2xl text-bermellon">Lo que hacemos</p>
        <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Un solo equipo para{" "}
          <span className="pincelada">
            todo tu proyecto
            <Pincelada />
          </span>
        </h2>
        <p className="mt-4 text-lg text-tinta-suave">
          Pintamos, rotulamos y además resolvemos los trabajos de herrería, madera y obra que hagan falta.
        </p>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map((s, i) => (
          <li
            key={s.id}
            id={s.id}
            data-reveal
            style={{ ["--delay" as string]: `${i * 90}ms`, ["--color-servicio" as string]: s.color }}
            className={`tarjeta-pintura group flex flex-col rounded-3xl border border-tinta/10 bg-white p-3 shadow-sm transition-shadow hover:shadow-xl ${
              i === 0 ? "lg:row-span-2" : ""
            }`}
          >
            <div className={`overflow-hidden rounded-2xl ${i === 0 ? "aspect-[4/3] lg:aspect-auto lg:flex-1" : "aspect-[16/10]"}`}>
              <Image
                src={`/fotos/${s.foto}-sm.webp`}
                alt=""
                width={720}
                height={480}
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-start gap-3 px-2 pb-2 pt-5 transition-colors duration-500 group-hover:text-white">
              <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full" style={{ background: s.color }} aria-hidden="true" />
              <div>
                <h3 className="font-display text-xl font-bold">{s.titulo}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-tinta-suave transition-colors duration-500 group-hover:text-white/90">
                  {s.texto}
                </p>
                <a
                  href={linkWhatsapp(`Hola Cristian, me comunico desde la página web 🌐. Quería consultar por ${s.titulo.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold underline decoration-2 underline-offset-4"
                >
                  Consultar por {s.titulo.toLowerCase()} →
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
