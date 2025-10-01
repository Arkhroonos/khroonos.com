/**
 * React Imports
 */

/**
 * Internal Imports
 */

import styles from './navbar.component.module.scss';

export function NavbarComponent() {
  return (
    <section className={styles['navbar']}>
      <div className={styles['container']}>
        <div className={styles['content-wrapper']}>
          <div className={styles['nav-link']}>
            <a href="/" className={styles['link']}>
              <img
                className={styles['icon']}
                src={'src/assets/medias/icons/icons/home.svg'}
                alt="home button"
              />
            </a>
          </div>
          <div className={styles['nav-link']}>
            <a href="/about" className={styles['link']}>
              About Me
            </a>
          </div>
          <div className={styles['nav-link']}>
            <a href="/projects" className={styles['link']}>
              Projects
            </a>
          </div>
          <div className={styles['nav-link']}>
            <a href="/#stack" className={styles['link']}>
              Stack
            </a>
          </div>
          <div className={styles['nav-link']}>
            <a href="/#experiences" className={styles['link']}>
              Experiences
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavbarComponent;
