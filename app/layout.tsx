import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Caveat_Brush, Inter } from "next/font/google";
import { SITIO_URL, cliente, servicios } from "@/lib/datos";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const caveat = Caveat_Brush({ subsets: ["latin"], weight: "400", variable: "--font-caveat", display: "swap" });

const titulo = `${cliente.nombre} | Pintor y cartelista en ${cliente.ciudad}`;
const descripcion =
  "Pintura, cartelería y letras pintadas a mano en Rosario y alrededores. También soldadura, carpintería y albañilería. Pedí tu presupuesto sin cargo por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITIO_URL),
  title: titulo,
  description: descripcion,
  keywords: ["pintor Rosario", "cartelería Rosario", "letras pintadas a mano", "pintura de frentes", "Cristian Zaragoza"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: cliente.nombre,
    title: titulo,
    description: descripcion,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${cliente.nombre}, pintor y cartelista` }],
  },
  twitter: { card: "summary_large_image", title: titulo, description: descripcion, images: ["/og.jpg"] },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export const viewport: Viewport = { themeColor: "#0f1b2d" };

// Datos estructurados para que Google lo muestre como negocio local
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  name: cliente.nombre,
  description: descripcion,
  url: SITIO_URL,
  image: `${SITIO_URL}/og.jpg`,
  logo: `${SITIO_URL}/logo.png`,
  telephone: `+${cliente.whatsapp}`,
  areaServed: { "@type": "City", name: cliente.ciudad },
  address: { "@type": "PostalAddress", addressLocality: cliente.ciudad, addressRegion: "Santa Fe", addressCountry: "AR" },
  sameAs: [cliente.instagram, cliente.facebook],
  makesOffer: servicios.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.titulo } })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${bricolage.variable} ${inter.variable} ${caveat.variable}`}>
      <body className="font-sans">
        <noscript>
          <style>{`[data-reveal]{opacity:1;transform:none}.rodillo::after{display:none}.rodillo img{transform:none}.cartel-pintado,.muestra-color{clip-path:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
