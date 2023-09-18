import React from 'react';
import styles from '../styles/works.module.css';
import CardWorks from '@/components/CardWorks';

export const metadata = {
  title: 'Cristian Zaragoza - Trabajos',
};

function works() {
  return (
    <>
      <div className={styles.galeria}>
        <h1 className={styles.title}>Trabajos</h1>

        <div className={styles.contenedorImagenes}>
          <CardWorks
            url="/images/canchita.jpg"
            titulo="Pintura de pared en cancha de futbol Doble 5"
            alt="canchita"
          />

          <CardWorks
            url="/images/pizzeria.jpg"
            titulo="Pintura para pizzeria 'Los 3 nietos'"
            alt="pizzeria"
          />

          <CardWorks
            url="/images/paredArmus.jpg"
            titulo="Pintura Armus Crossfit"
            alt="pared"
          />

          <CardWorks
            url="/images/barberiaPorton.jpg"
            titulo="Pintura para porton de barberia"
            alt="barberia"
          />

          <CardWorks
            url="/images/paredVerde.jpg"
            titulo="Pintura pared de verduleria"
            alt="barberia"
          />

          <CardWorks
            url="/images/pareduno.jpg"
            titulo='Pintura "Pared Uno"'
            alt="barberia"
          />

          <CardWorks
            url="/images/cartel.jpg"
            titulo='Pintura cartel "Los Principes"'
            alt="barberia"
          />

          <CardWorks
            url="/images/pintando.jpg"
            titulo='Pintura pared "Armus Crossfit"'
            alt="barberia"
          />

          <CardWorks
            url="/images/anchorena.jpg"
            titulo="Pintura para taller mecanico"
            alt="barberia"
          />

          <CardWorks
            url="/images/camion.jpg"
            titulo="Publicidad de camión de mudanzas"
            alt="barberia"
          />

          <CardWorks
            url="/images/dubai.jpg"
            titulo="Dubai motors, auxilios y traslados"
            alt="barberia"
          />

          <CardWorks
            url="/images/fotografia.jpg"
            titulo='Fotografia infantil "Vanesa Martinez"'
            alt="barberia"
          />

          <CardWorks
            url="/images/yamaha.jpg"
            titulo="Pintura casa de repuestos"
            alt="barberia"
          />

          <CardWorks
            url="/images/kawasaki.jpg"
            titulo="Pintura Kawasaki"
            alt="barberia"
          />

          <CardWorks
            url="/images/secco.jpg"
            titulo="Pintura container Secco"
            alt="barberia"
          />
        </div>
      </div>
    </>
  );
}

export default works;
