import styles from './pagesStyles/ProjectsPage.module.scss';
import NavbarComponent from '../navbar/navbar.component';
import FooterComponent from '../footer/footer.component';
import ThemeSwitcher from '../THEME/theme-switcher';

export default function ProjectsPage() {
  return (
    <div className={styles['page']}>
      <section className={styles['app-header']}>
        <NavbarComponent />
      </section>
      <main className={styles['content']}>
        <h1 className={styles['title-bar-text']}>Projects</h1>
      </main>
      <section>
        <FooterComponent />
      </section>
      <section>
        <ThemeSwitcher />
      </section>
    </div>
  );
}
