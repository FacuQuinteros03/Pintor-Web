import React from 'react';
import styles from '../styles/works.module.css';
import Image from 'next/image';

function works() {
  return (
    <>
      <div className={styles.galeria}>
        <h1 className={styles.title}>Trabajos</h1>

        <div className={styles.contenedorImagenes}>
          <div className={styles.imagen}>
            <Image
              src={'/images/canchita.jpg'}
              width={400}
              height={300}
              className={styles.img}
            />
            <div className={styles.overlay}>
              <h2>Pintura de pared en cancha de futbol "Doble 5"</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/pizzeria.jpg'}
              width={400}
              height={300}
              className={styles.img}
            />
            <div className={styles.overlay}>
              <h2>Pintura para pizzeria "Los 3 nietos"</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/barberiaPorton.jpg'}
              width={400}
              height={300}
              className={styles.img}
            />
            <div className={styles.overlay}>
              <h2>Pintura para porton de barberia</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/paredArmus.jpg'}
              width={400}
              height={300}
              className={styles.img}
            />
            <div className={styles.overlay}>
              <h2>Pintura Armus Crossfit</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/paredVerde.jpg'}
              width={400}
              height={300}
              className={styles.img}
            />
            <div className={styles.overlay}>
              <h2>Pintura</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/paredUno.jpg'}
              width={400}
              height={300}
              className={styles.img}
            />
            <div className={styles.overlay}>
              <h2>Pintura "Pared Uno"</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/cartel.jpg'}
              width={400}
              height={300}
              className={styles.img}
            />
            <div className={styles.overlay}>
              <h2>Pintura cartel "Los Principes"</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/pintando.jpg'}
              width={400}
              height={300}
              className={styles.img}
            />
            <div className={styles.overlay}>
              <h2>Pintura pared "Armus Crossfit"</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/barberia.jpg'}
              width={400}
              height={300}
              className={styles.img}
            />
            <div className={styles.overlay}>
              <h2>Pintura para "Rory's Barbers"</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default works;
