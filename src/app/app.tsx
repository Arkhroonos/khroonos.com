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

/**
 * Main Page layout
 */
export function App() {
  return (
    <main>
      <section className={styles['app-header']}>
        <div className={styles['container']}>
          <div className={styles['content-wrapper']}>
            <div className={styles['nav-link']}>
              <a href="#aboutme" className={styles['link']}>
                About Me
              </a>
            </div>
            <div className={styles['nav-link']}>
              <a href="#projects" className={styles['link']}>
                Projects
              </a>
            </div>
            <div className={styles['nav-link']}>
              <a href="#stack" className={styles['link']}>
                Stack
              </a>
            </div>
            <div className={styles['nav-link']}>
              <a href="#experiences" className={styles['link']}>
                Experiences
              </a>
            </div>
          </div>
        </div>
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
      <section className={styles['app-footer']}>
        <div className={styles.footer}>
          <div className={styles['container']}>
            <div className={styles['content-wrapper']}>
              <h1>Footer</h1>
            </div>
            <div className={styles['footer-links']}></div>
          </div>
        </div>
      </section>
      <section className={styles['app-theme-switcher']}>
        <ThemeSwitcher />
      </section>
    </main>
  );
}

export default App;
