import Link from "next/link";

export default function NoEncontrado() {
  return (
    <main className="grid min-h-dvh place-items-center bg-tinta px-4 text-center text-white">
      <div>
        <p className="font-pincel text-7xl text-amarillo">404</p>
        <h1 className="mt-2 font-display text-3xl font-bold">Esta pared todavía está sin pintar</h1>
        <p className="mt-3 text-white/70">La página que buscás no existe.</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-tinta">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
