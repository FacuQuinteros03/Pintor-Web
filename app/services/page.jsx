import React from 'react';
import style from '../styles/services.module.css';
import ComponenteCard from '@/components/Card';

function Services() {
  return (
    <div
      className={style.contenedor}
      style={{
        background:
          'linear-gradient(rgba(0, 1, 3, 0.2), rgba(0, 0, 0, 0.7)), url(images/fondo5.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section>
        <div className={style.containerCards}>
          <ComponenteCard
            titulo={'Carteleria'}
            imagen={'/images/pinturaServicios.jpg'}
            texto={
              'Bienvenido a nuestro mundo de colores y creatividad. Ofrecemos servicios de pintura excepcionales para transformar tus espacios en obras de arte. Nuestro equipo de pintores talentosos y experimentados trae vida a tus paredes con precisión y pasión. Ya sea que busques una nueva paleta para tu hogar, un mural personalizado o un revestimiento especializado, estamos aquí para superar tus expectativas. Nos enorgullecemos de utilizar solo pinturas de alta calidad, garantizando resultados duraderos y hermosos. Con precios asequibles y atención al detalle, estamos listos para pintar tu mundo de belleza. Contáctanos hoy y déjanos embellecer tus espacios.'
            }
          />
          <ComponenteCard
            titulo={'Soldadura'}
            imagen={'/images/soldadorServicios.jpg'}
            id="soldadura"
            texto={
              '¡Bienvenido al mundo de la soldadura, donde unimos metales con maestría y precisión! Somos expertos en ofrecer soluciones de soldadura de alta calidad para satisfacer tus necesidades industriales y personales. Nuestro equipo de soldadores altamente capacitados cuenta con años de experiencia en diversos tipos de soldadura, desde la soldadura por arco hasta la soldadura TIG y MIG. Utilizamos equipos de vanguardia y técnicas avanzadas para asegurar uniones sólidas y duraderas. Ya sea que necesites reparaciones, fabricación de piezas personalizadas o proyectos de construcción, estamos aquí para cumplir tus expectativas con puntualidad y profesionalismo. Confía en nosotros para enfrentar cualquier desafío de soldadura que tengas. Contáctanos hoy y déjanos trabajar con precisión para superar tus expectativas.'
            }
          />
          <ComponenteCard
            titulo={'Carpinteria'}
            imagen={'/images/carpinteroServicios.jpg'}
            texto={
              'Descubre la excelencia en carpintería con nosotros. Somos expertos en crear muebles únicos y funcionales, diseñados especialmente para ti. Nuestro equipo altamente capacitado y comprometido se esfuerza por brindar soluciones a medida que se adapten a tus necesidades y estilo. Desde renovaciones hasta detalles arquitectónicos, cada proyecto recibe nuestra dedicación y la calidad de los materiales que utilizamos. Tu satisfacción es nuestra prioridad, por lo que trabajamos en estrecha colaboración contigo durante todo el proceso. Con plazos cumplidos puntualmente y precios competitivos, confía en nosotros para dar vida a tus ideas en madera. ¡Contáctanos hoy para una consulta gratuita!'
            }
          />
          <ComponenteCard
            id="albañileria"
            titulo={'Albañileria'}
            imagen={'/images/albañilServicios.jpg'}
            texto={
              '¡Bienvenido al mundo de la albañilería, donde construimos tus sueños en cada ladrillo! Nos enorgullecemos de ser tus aliados confiables para proyectos de construcción y renovación.  Nuestro equipo de albañiles altamente capacitados tiene una vasta experiencia en todo tipo de trabajos, desde pequeñas reparaciones hasta grandes proyectos de construcción. Utilizamos técnicas y materiales de alta calidad para garantizar resultados sólidos y duraderos. Ya sea que desees construir una nueva estructura, renovar tu hogar o crear un espacio exterior acogedor, estamos preparados para hacerlo realidad. Contamos con un compromiso inquebrantable con la excelencia y la satisfacción del cliente. Trabajamos con precisión y eficiencia para entregar proyectos en tiempo y forma. Confía en nosotros para materializar tus ideas. Contáctanos hoy y déjanos construir contigo el futuro que deseas.'
            }
          />
        </div>
      </section>
    </div>
  );
}

export default Services;
