/**
 * Styles, Icons & Informations Imports
 */
import styles from './home.module.scss';

/**
 * Components Imports
 */
import { Navbar, Footer, ThemeSwitcher } from '../components/layout';
import {
  Hero,
  Stack,
  About,
  ProjectsSection,
  Skills,
  Experience,
  Marquee,
} from '../components/sections';

/**
 * Main Page layout
 */
export function Home() {
  return (
    <main>
      <section className={styles['app-header']}>
        <Navbar />
      </section>

      <section className={styles['app-hero']} id="hero">
        <Hero />
        <Marquee />
      </section>

      <section className={styles['app-container']}>
        <div className={styles.stack} id="stack">
          <Stack />
        </div>
        <div className={styles.motivation} id="aboutme">
          <About />
        </div>
        <div className={styles.projects} id="projects">
          <ProjectsSection />
        </div>
        <div className={styles.skills} id="skills">
          <Skills />
        </div>
        <div className={styles.experience} id="experiences">
          <Experience />
        </div>
      </section>
      <section>
        <Footer />
      </section>
      <section>
        <ThemeSwitcher />
      </section>
    </main>
  );
}

export default Home;
