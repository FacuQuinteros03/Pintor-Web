import type { NextConfig } from "next";

// Sitio 100% estático: `npm run build` genera la carpeta out/ lista para cualquier hosting.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // las fotos ya salen optimizadas por scripts/optimizar-fotos.mjs
  devIndicators: false,
};

export default nextConfig;
