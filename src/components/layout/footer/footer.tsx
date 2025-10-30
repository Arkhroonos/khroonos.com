import styles from './footer.module.scss';

export function Footer() {
  return (
    <section className={styles['app-footer']}>
      <div className={styles['footer']}>
        <div className={styles['container']}>
          <div className={styles['content-wrapper']}>
            <h1>Footer</h1>
          </div>
          <div className={styles['footer-links']}></div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
