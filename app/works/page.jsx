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
              alt="canchita"
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
              alt="pizzeria"
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
              alt="barberia"
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
              alt="paredArmus"
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
              alt="paredVerde"
            />
            <div className={styles.overlay}>
              <h2>Pintura pared de verduleria</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/pareduno.jpg'}
              width={400}
              height={300}
              className={styles.img}
              alt="paredUno"
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
              alt="cartel"
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
              alt="pintando"
            />
            <div className={styles.overlay}>
              <h2>Pintura pared "Armus Crossfit"</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/anchorena.jpg'}
              width={400}
              height={300}
              className={styles.img}
              alt="taller"
            />
            <div className={styles.overlay}>
              <h2>Pintura para taller mecanico</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/camion.jpg'}
              width={400}
              height={300}
              className={styles.img}
              alt="camion"
            />
            <div className={styles.overlay}>
              <h2>Publicidad de camión de mudanzas"</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/dubai.jpg'}
              width={400}
              height={300}
              className={styles.img}
              alt="traslados"
            />
            <div className={styles.overlay}>
              <h2>Dubai motors, auxilios y traslados</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/fotografia.jpg'}
              width={400}
              height={300}
              className={styles.img}
              alt="fotografia"
            />
            <div className={styles.overlay}>
              <h2>Fotografia infantil "Vanesa Martinez"</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/yamaha.jpg'}
              width={400}
              height={300}
              className={styles.img}
              alt="yamaha"
            />
            <div className={styles.overlay}>
              <h2>Pintura casa de repuestos</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/kawasaki.jpg'}
              width={400}
              height={300}
              className={styles.img}
              alt="kawasaki"
            />
            <div className={styles.overlay}>
              <h2>Pintura kawasaki</h2>
            </div>
          </div>

          <div className={styles.imagen}>
            <Image
              src={'/images/secco.jpg'}
              width={400}
              height={300}
              className={styles.img}
              alt="secco"
            />
            <div className={styles.overlay}>
              <h2>Pintura container Secco</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default works;
