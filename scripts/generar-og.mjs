// Genera public/og.jpg (1200x630), la imagen que aparece al compartir el link.
import sharp from "sharp";

const foto = await sharp("public/fotos/pintando.webp").resize(470, 630, { fit: "cover" }).toBuffer();
const logo = await sharp("public/logo.png").resize(150).toBuffer();
const texto = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <style>
    .t{font-family:'Segoe UI',Arial,sans-serif;fill:#fff}
  </style>
  <text x="70" y="300" class="t" font-size="68" font-weight="800">Cristian Zaragoza</text>
  <rect x="70" y="330" width="420" height="14" rx="7" fill="#f2b630"/>
  <text x="70" y="410" class="t" font-size="38" opacity=".85">Pintura y cartelería a mano</text>
  <text x="70" y="460" class="t" font-size="30" opacity=".6">Rosario y alrededores</text>
  <rect x="70" y="510" width="420" height="60" rx="30" fill="#1fa855"/>
  <text x="280" y="550" class="t" font-size="26" font-weight="700" text-anchor="middle">Presupuesto sin cargo</text>
</svg>`);

await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#1b1916" } })
  .composite([
    { input: foto, left: 730, top: 0 },
    { input: logo, left: 70, top: 70 },
    { input: texto, left: 0, top: 0 },
  ])
  .jpeg({ quality: 85 })
  .toFile("public/og.jpg");
console.log("public/og.jpg listo");
