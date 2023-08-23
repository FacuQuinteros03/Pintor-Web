import styles from '../app/styles/loading.module.css';

export default function Loading() {
  return (
    <section className={styles.seccion}>
      <div className={styles.loader}></div>
    </section>
  );
}
