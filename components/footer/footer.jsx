import style from '@/app/styles/footer.module.css';
import Image from 'next/image';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.grupo1}>
        <div className="box">
          <figure>
            <a src="#">
              <Image
                src={'/images/loguiti.png'}
                width={765 / 3.5}
                height={622 / 3.5}
              />
            </a>
          </figure>
        </div>
        <div className={style.box}>
          <h2>Sobre nosotros</h2>
          <p>
            Ofrecemos todos los servicios para tu hogar, con mas de 20 años de
            experiencia realizando pinturas, albañileria, carteleria,
            carpinteria y soldaduras
          </p>
          <p>Contactanos para un presupuesto sin cargo</p>
        </div>
        <div className={style.box}>
          <h2>SIGUENOS</h2>
          <div className={style.redSocial}>
            <a
              href="https://www.facebook.com/profile.php?id=100088905354668&mibextid=D4KYlr"
              target="_blank"
              class="fa-brands fa-facebook"
            ></a>
            <a href="#" class="fa-brands fa-instagram" target="_blank"></a>
            <a
              href="https://wa.link/t7h5y1"
              class="fa-brands fa-whatsapp"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
      <div className={style.grupo2}>
        <small>
          &copy; 2023 <b>Cristian Zaragoza</b> -Todos los Derechos Reservados.
          <br />
          Desarrollado por{' '}
          <a
            href="https://www.linkedin.com/in/facundo-quinteros-125051232"
            target="_blank"
            className={style.link}
          >
            Facundo Quinteros
          </a>{' '}
          y{' '}
          <a
            href="https://www.linkedin.com/in/lautaro-tomas-lucero-3326b5227"
            target="_blank"
            className={style.link}
          >
            Lautaro Lucero
          </a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
