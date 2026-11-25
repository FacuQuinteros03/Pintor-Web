// Todos los datos del cliente en un solo lugar.
// Salen del sitio original (2023); cualquier cambio de teléfono, redes o servicios se hace acá.

export const SITIO_URL = process.env.NEXT_PUBLIC_SITIO_URL ?? "https://cristian-zaragoza.vercel.app";

export const cliente = {
  nombre: "Cristian Zaragoza",
  oficio: "Pintura y cartelería",
  ciudad: "Rosario",
  zona: "Rosario y alrededores",
  experiencia: "Más de 20 años",
  whatsapp: "5493412283096",
  whatsappVisible: "341 228-3096",
  mensajeWhatsapp: "Hola Cristian, me comunico desde la página web 🌐. Mi consulta es...",
  instagram: "https://www.instagram.com/cristiancz.pintura/",
  instagramUsuario: "@cristiancz.pintura",
  facebook: "https://www.facebook.com/profile.php?id=100088905354668",
};

export const linkWhatsapp = (mensaje = cliente.mensajeWhatsapp) =>
  `https://wa.me/${cliente.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const sobreMi = [
  "Mi nombre es Cristian. Toda mi vida me dediqué a la cartelería y las letras. Junto con mi padre forjamos una trayectoria que dejó su marca en muchísimos lugares de Rosario y sus alrededores: hoy somos parte del paisaje visual de la ciudad.",
  "Seguimos con esa tradición familiar. Acompañado por un equipo de colegas, ofrecemos una amplia gama de servicios para que tu local, tu casa o tu vehículo queden como los imaginás.",
];

export type Servicio = {
  id: string;
  titulo: string;
  texto: string;
  foto: string;
  color: string;
};

// Textos resumidos de los originales del sitio, sin agregar promesas nuevas.
export const servicios: Servicio[] = [
  {
    id: "pintura",
    titulo: "Pintura",
    texto: "Interiores, exteriores y frentes de locales. Murales personalizados y revestimientos, siempre con pinturas de calidad.",
    foto: "pinturaServicios",
    color: "#1ba3a8",
  },
  {
    id: "carteleria",
    titulo: "Cartelería y letras",
    texto: "Carteles y letras pintadas a mano para comercios, persianas, paredes, vehículos y contenedores.",
    foto: "cartel",
    color: "#e8462b",
  },
  {
    id: "soldadura",
    titulo: "Soldadura",
    texto: "Reparaciones, piezas a medida y estructuras, con uniones sólidas y duraderas.",
    foto: "soldadorServicios",
    color: "#f2b630",
  },
  {
    id: "carpinteria",
    titulo: "Carpintería",
    texto: "Muebles a medida, renovaciones y detalles en madera pensados para tu espacio.",
    foto: "carpinteroServicios",
    color: "#c4783d",
  },
  {
    id: "albanileria",
    titulo: "Albañilería",
    texto: "Desde pequeñas reparaciones hasta renovaciones y construcciones, en tiempo y forma.",
    foto: "albanilServicios",
    color: "#9cbf3b",
  },
];

export type Categoria = "Frentes y locales" | "Paredes y murales" | "Vehículos y contenedores";
export const categorias: Categoria[] = ["Frentes y locales", "Paredes y murales", "Vehículos y contenedores"];

export type Trabajo = {
  foto: string;
  titulo: string;
  alt: string;
  categoria: Categoria;
  ancho: number;
  alto: number;
};

// Títulos tal cual el sitio original; los alt describen lo que se ve en cada foto.
export const trabajos: Trabajo[] = [
  { foto: "pizzeria", titulo: "Pizzería “Los 3 Nietos”", alt: "Frente de pizzería y kiosco pintado en naranja con letras a mano “Los 3 Nietos”", categoria: "Frentes y locales", ancho: 641, alto: 505 },
  { foto: "canchita", titulo: "Cancha de fútbol Doble 5", alt: "Pared blanca con el logo de Doble 5 F5, eventos y cumpleaños, pintado a mano", categoria: "Paredes y murales", ancho: 686, alto: 589 },
  { foto: "paredArmus", titulo: "Armus CrossFit", alt: "Pared negra larga con letras blancas “Armus CrossFit”", categoria: "Paredes y murales", ancho: 1032, alto: 441 },
  { foto: "barberiaPorton", titulo: "Portón de barbería", alt: "Portón negro con poste de barbero y letras cursivas pintadas a mano", categoria: "Frentes y locales", ancho: 434, alto: 434 },
  { foto: "kawasaki", titulo: "Kawasaki", alt: "Persiana metálica con el logo de Kawasaki pintado en negro y verde", categoria: "Frentes y locales", ancho: 1200, alto: 1600 },
  { foto: "pareduno", titulo: "Espacio Uno", alt: "Pintor trabajando en un mural con el logo de Espacio Uno, una nueva oportunidad", categoria: "Paredes y murales", ancho: 1032, alto: 774 },
  { foto: "cartel", titulo: "Cartel “Los Príncipes”", alt: "Cartel turquesa sobre un frente con letras “Los Príncipes”, ventas por mayor y menor", categoria: "Frentes y locales", ancho: 1280, alto: 427 },
  { foto: "pintando", titulo: "Armus CrossFit, en proceso", alt: "Pintor delineando letras gigantes sobre la pared negra de Armus CrossFit", categoria: "Paredes y murales", ancho: 720, alto: 1280 },
  { foto: "anchorena", titulo: "Taller mecánico Anchorena", alt: "Persiana azul con un auto dentro de un rombo amarillo y letras “Anchorena Servicios”", categoria: "Frentes y locales", ancho: 720, alto: 960 },
  { foto: "secco", titulo: "Contenedor Secco", alt: "Contenedor azul con las letras blancas “SECCO” pintadas en grande", categoria: "Vehículos y contenedores", ancho: 1599, alto: 899 },
  { foto: "dubai", titulo: "Dubai Motors, auxilios y traslados", alt: "Pared negra con logo de grúa y letras amarillas “Auxilios y Traslados”", categoria: "Paredes y murales", ancho: 1600, alto: 1200 },
  { foto: "camion", titulo: "Camión de Mudanzas Abril", alt: "Caja de camión blanca con la publicidad de Mudanzas Abril y teléfono", categoria: "Vehículos y contenedores", ancho: 640, alto: 480 },
  { foto: "fotografia", titulo: "Vanesa Martínez, fotografía infantil", alt: "Pared blanca con el logo de mariposa de Vanesa Martínez Fotografía Infantil", categoria: "Paredes y murales", ancho: 1600, alto: 1200 },
  { foto: "yamaha", titulo: "Casa de repuestos Motomarec", alt: "Frente de casa de repuestos con logos de Yamaha, Motomarec y Honda pintados", categoria: "Frentes y locales", ancho: 1600, alto: 1200 },
  { foto: "paredVerde", titulo: "Verdulería", alt: "Frente de verdulería pintado en verde lima con letras y un racimo de uvas", categoria: "Frentes y locales", ancho: 1600, alto: 1200 },
];
