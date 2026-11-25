// Convierte fotos a WebP livianas para la web.
// Uso: node scripts/optimizar-fotos.mjs <carpeta-origen> [carpeta-destino]
// Genera <nombre>.webp (máx. 1600 px) y <nombre>-sm.webp (máx. 720 px).
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const [origen, destino = "public/fotos"] = process.argv.slice(2);
if (!origen) {
  console.error("Falta la carpeta de origen");
  process.exit(1);
}
await mkdir(destino, { recursive: true });

for (const archivo of await readdir(origen)) {
  if (!/\.(jpe?g|png|jfif|webp|heic)$/i.test(archivo)) continue;
  const nombre = path.parse(archivo).name;
  // trim() recorta bordes negros de capturas de pantalla (ej. la foto del camión)
  const base = sharp(path.join(origen, archivo)).rotate().trim({ background: "#000", threshold: 20 });
  const buffer = await base.toBuffer();
  for (const [sufijo, ancho, calidad] of [["", 1600, 78], ["-sm", 720, 72]]) {
    const info = await sharp(buffer)
      .resize({ width: ancho, height: ancho, fit: "inside", withoutEnlargement: true })
      .webp({ quality: calidad })
      .toFile(path.join(destino, `${nombre}${sufijo}.webp`));
    if (!sufijo) console.log(`${nombre}: ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)} KB`);
  }
}
