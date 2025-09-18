import styles from './pagesStyles/projectPagesStyles.module.scss';
import NavbarComponent from '../navbar/navbar.component';

export default function ProjectsPages() {
  return (
    <div className={styles['projects-page']}>
      <section className={styles['app-header']}>
        <NavbarComponent />
      </section>
      <main className={styles['projects-content']} style={{ paddingTop: '6rem', padding: '2rem' }}>
        <h1 className={styles['title-bar-text']}>Projects</h1>
      </main>
    </div>
  );
}
