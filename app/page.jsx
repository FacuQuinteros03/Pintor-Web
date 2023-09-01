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
          'linear-gradient(rgba(0, 1, 3, 0.5), rgba(0, 0, 0, 0.7)), url(images/fondoservicios.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.contenedorTitle}>
        <h1 className={styles.title}>Cristian Zaragoza Pintor Profesional</h1>
        <p className={styles.text}>Pedi tu presupuesto sin cargo</p>
        <ContenedorBoton>
          <Link href={'/contact'} className="link">
            <Boton>
              <Span>Escribime</Span>
            </Boton>
          </Link>
        </ContenedorBoton>
        <div className={styles.about}>
          <p className={styles.abtext}>
            Mi nombre es Cristian. Durante toda mi vida, me he dedicado
            apasionadamente al mundo de la cartelería y las letras. Junto con mi
            padre, hemos forjado una trayectoria a lo largo de los años, dejando
            una marca indeleble en numerosos lugares de Rosario y sus
            alrededores. Nuestro compromiso y dedicación nos han permitido ser
            parte del paisaje visual de la ciudad. En la actualidad, continuamos
            esta tradición familiar. Acompañado por un grupo de colegas
            talentosos, trabajamos en equipo para ofrecer una amplia gama de
            servicios que amplían las posibilidades para nuestros valiosos
            clientes. Estamos enfocados en brindar soluciones visuales que no
            solo satisfagan sus necesidades, sino que también superen sus
            expectativas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default page;
