/**
 * Internal Imports
 */
import styles from './styles/AboutPage.module.scss';
import { Navbar, Footer, ThemeSwitcher } from '../components/layout';

export default function AboutPage() {
  return (
    <div className={styles['page']}>
      <section>
        <Navbar />
      </section>
      <main className={styles['content']}>
        <h1 className={styles['title-bar-text']}>About Me</h1>
      </main>
      <section>
        <Footer />
      </section>
      <section>
        <ThemeSwitcher />
      </section>
    </div>
  );
}
//todo: change page layout & remove inline styles
