import Image from "next/image";
import { cliente, sobreMi } from "@/lib/datos";
import { Pincelada } from "./iconos";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2">
      <div className="relative order-2 lg:order-1">
        <figure className="rodillo rounded-3xl" style={{ ["--rodillo" as string]: "var(--color-azul)" }}>
          <Image
            src="/fotos/pareduno.webp"
            alt="Cristian pintando el mural de Espacio Uno"
            width={1032}
            height={774}
            sizes="(min-width: 1024px) 540px, 100vw"
            className="w-full rounded-3xl object-cover"
          />
        </figure>
        <div
          data-reveal
          className="absolute -bottom-6 right-4 rotate-[-4deg] rounded-2xl bg-lima px-5 py-3 font-pincel text-2xl text-tinta shadow-lg sm:right-8"
          style={{ ["--delay" as string]: "700ms" }}
        >
          Tradición familiar
        </div>
      </div>

      <div data-reveal className="order-1 lg:order-2">
        <p className="font-pincel text-2xl text-azul">Sobre mí</p>
        <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Toda una vida entre{" "}
          <span className="pincelada">
            pinceles y letras
            <Pincelada color="var(--color-turquesa)" />
          </span>
        </h2>
        {sobreMi.map((p) => (
          <p key={p.slice(0, 20)} className="mt-5 text-lg leading-relaxed text-tinta-suave">
            {p}
          </p>
        ))}
        <p className="mt-6 font-pincel text-3xl text-tinta">— {cliente.nombre.split(" ")[0]}</p>
      </div>
    </section>
  );
}
