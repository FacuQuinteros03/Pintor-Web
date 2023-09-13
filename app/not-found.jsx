import Link from 'next/link';
import styles from '../app/styles/notfound.module.css';

export default function notFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>404</h1>
      <p className={styles.p}>Error: Pagina no encontrada</p>

      <a href="https://cristian-zaragoza.vercel.app/" className={styles.a}>
        Volver al inicio
      </a>
    </div>
  );
}
