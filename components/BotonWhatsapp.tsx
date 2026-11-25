import { linkWhatsapp } from "@/lib/datos";
import { IconoWhatsapp } from "./iconos";

export default function BotonWhatsapp() {
  return (
    <a
      href={linkWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="latido fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/20 transition hover:scale-105"
      style={{ isolation: "isolate" }}
    >
      <IconoWhatsapp className="h-7 w-7" />
    </a>
  );
}
