/**
 * Styles, Icons & Informations Imports
 */
import styles from 'src/app/app.module.scss';

/**
 * Components Imports
 */
import InfosComponent from './INFOS/infos.component';
import StackComponent from './STACK/stack.component';
import MotivationComponent from './MOTIVATION/motivation.component';
import ProjectsComponent from './PROJECTS/projects.component';
import SkillsComponent from './SKILLS/skills.component';
import ExperienceComponent from './EXPERIENCE/experience.component';
import HobbiesComponent from './HOBBIES/hobbies.component';
import MarqueeComponent from './MARQUEE/marquee.component';
import ThemeSwitcher from './THEME/theme-switcher';
import NavbarComponent from './navbar/navbar.component';
import FooterComponent from './footer/footer.component';

/**
 * Main Page layout
 */
export function App() {
  return (
    <main>
      <section className={styles['app-header']}>
        <NavbarComponent />
      </section>

      <section className={styles['app-hero']} id="hero">
        <InfosComponent />
        <MarqueeComponent />
      </section>

      <section className={styles['app-container']}>
        <div className={styles.stack} id="stack">
          <StackComponent />
        </div>
        <div className={styles.motivation} id="aboutme">
          <MotivationComponent />
        </div>
        <div className={styles.projects} id="projects">
          <ProjectsComponent />
        </div>
        <div className={styles.skills} id="skills">
          <SkillsComponent />
        </div>
        <div className={styles.experience} id="experiences">
          <ExperienceComponent />
        </div>
        <div className={styles.hobbies}>
          <HobbiesComponent />
        </div>
      </section>
      <section>
        <FooterComponent />
      </section>
      <section>
        <ThemeSwitcher />
      </section>
    </main>
  );
}

export default App;
