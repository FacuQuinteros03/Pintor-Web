import React from 'react';
import styles from '../app/styles/works.module.css';
import Image from 'next/image';

function CardWorks({ url, titulo, alt }) {
  return (
    <div className={styles.imagen}>
      <Image
        src={url}
        width={400}
        height={300}
        className={styles.img}
        alt={alt}
      />
      <div className={styles.overlay}>
        <h2>{titulo}</h2>
      </div>
    </div>
  );
}

export default CardWorks;
