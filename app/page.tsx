import BotonWhatsapp from "@/components/BotonWhatsapp";
import Contacto from "@/components/Contacto";
import Encabezado from "@/components/Encabezado";
import Galeria from "@/components/Galeria";
import Pie from "@/components/Pie";
import Portada from "@/components/Portada";
import Revelado from "@/components/Revelado";
import Servicios from "@/components/Servicios";
import SobreMi from "@/components/SobreMi";

export default function Inicio() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Servicios />
        <Galeria />
        <SobreMi />
        <Contacto />
      </main>
      <Pie />
      <BotonWhatsapp />
      <Revelado />
    </>
  );
}
