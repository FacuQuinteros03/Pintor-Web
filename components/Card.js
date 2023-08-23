import React from 'react';
import style from '../app/styles/services.module.css';
import Image from 'next/image';

const ComponenteCard = ({ imagen, titulo, texto }) => {
  return (
    <div className={style.card}>
      <div className={style.coverCard}>
        <Image src={imagen} alt="imagen" width={300} height={190} />
      </div>
      <h2>{titulo}</h2>
      <p>{texto}</p>
      <hr />
      <div className={style.footerCard}>
        <h3 className={style.userName}>Cristian Zaragoza</h3>
        <i>2010-2023</i>
      </div>
    </div>
  );
};

export default ComponenteCard;
