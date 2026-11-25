import Image from "next/image";
import { cliente, linkWhatsapp } from "@/lib/datos";
import { IconoFacebook, IconoInstagram, IconoWhatsapp } from "./iconos";

export default function Pie() {
  const redes = [
    { href: linkWhatsapp(), Icono: IconoWhatsapp, nombre: "WhatsApp" },
    { href: cliente.instagram, Icono: IconoInstagram, nombre: "Instagram" },
    { href: cliente.facebook, Icono: IconoFacebook, nombre: "Facebook" },
  ];
  return (
    <footer className="border-t border-tinta/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 pb-24 pt-10 text-sm text-tinta-suave sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.webp" alt="" width={40} height={29} />
          <div>
            <p className="font-display font-bold text-tinta">{cliente.nombre}</p>
            <p>{cliente.oficio} · {cliente.ciudad}</p>
          </div>
        </div>
        <ul className="flex gap-3">
          {redes.map(({ href, Icono, nombre }) => (
            <li key={nombre}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={nombre}
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-tinta shadow-sm transition hover:-translate-y-0.5 hover:bg-tinta hover:text-white"
              >
                <Icono className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center sm:text-right">
          © {new Date().getFullYear()} {cliente.nombre}
          <br />
          Sitio por{" "}
          <a href="https://www.linkedin.com/in/facundo-quinteros-125051232" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-bermellon">
            Facundo Quinteros
          </a>{" "}
          y{" "}
          <a href="https://www.linkedin.com/in/lautaro-tomas-lucero-3326b5227" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-bermellon">
            Lautaro Lucero
          </a>
        </p>
      </div>
    </footer>
  );
}
