'use client';
import styles from '../app/styles/home.module.css';
import Link from 'next/link';
import React from 'react';
import { ContenedorBoton, Boton, Span } from './elements/Formularios';

function page() {
  return (
    <section
      className={styles.body}
      style={{
        background:
          'linear-gradient(rgba(0, 1, 3, 0.5), rgba(0, 0, 0, 0.7)), url(images/fondoServicios.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.contenedorTitle}>
        <h1 className={styles.title}>Cristian Zaragoza Pintor Profesional</h1>
        <p className={styles.text}>Pedime tu presupuesto sin cargo</p>
        <ContenedorBoton>
          <Link href={'/contact'} className="link">
            <Boton>
              <Span>Escribime</Span>
            </Boton>
          </Link>
        </ContenedorBoton>
      </div>

      <Link href={'/services'}>
        <div class={styles.opciones}>
          <div class={styles.opcion}>CARTELERIA</div>
          <div class={styles.opcion}>CARPINTERIA</div>
          <div class={styles.opcion}>SOLDADURA</div>
          <div class={styles.opcion}>PINTURA</div>
          <div class={styles.opcion}>ALBAÑILERIA</div>
        </div>
      </Link>
    </section>
  );
}

export default page;
