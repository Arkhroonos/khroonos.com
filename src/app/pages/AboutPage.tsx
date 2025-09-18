/**
 * Internal Imports
 */
import styles from './pagesStyles/projectPagesStyles.module.scss';
import NavbarComponent from '../navbar/navbar.component';

export default function AboutPage() {
  return (
    <div className={styles['about-page']}>
      <section className={styles['app-header']}>
        <NavbarComponent />
      </section>
      <main className={styles['about-content']} style={{ paddingTop: '6rem', padding: '2rem' }}>
        <h1>About Me</h1>
      </main>
    </div>
  );
}
//todo: change page layout & remove inline styles
