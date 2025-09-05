/*
 * Importing Styles & Components
 */
import styles from 'src/app/app.module.scss';

import NavbarComponent from './NAVBAR/navbar.component';
import InfosComponent from './INFOS/infos.component';
import ApprenticeshipComponent from './APPRENTICESHIP/apprenticeship.component';
import StackComponent from './STACK/stack.component';
import MotivationComponent from './MOTIVATION/motivation.component';
import ProjectsComponent from './PROJECTS/projects.component';
import SoftwareComponent from './SOFTWARE/software.component';
import SkillsComponent from './SKILLS/skills.component';
import ExperienceComponent from './EXPERIENCE/experience.component';
import HobbiesComponent from './HOBBIES/hobbies.component';
import FooterComponent from './FOOTER/footer.component';
import MarqueeComponent from './MARQUEE/marquee.component';

export function App() {
  return (
    <main>
      <section className={styles['app-header']}>
        <NavbarComponent />
      </section>

      <section className={styles['app-hero']}>
        <InfosComponent />
        <MarqueeComponent />
      </section>

      <section className={styles['app-container']}>
        <div className={styles.apprenticeship}>
          <ApprenticeshipComponent />
        </div>
        <div className={styles.stack}>
          <StackComponent />
        </div>
        <div className={styles.motivation}>
          <MotivationComponent />
        </div>
        <div className={styles.projects}>
          <ProjectsComponent />
        </div>
        <div className={styles.skills}>
          <SkillsComponent />
        </div>
        <div className={styles.experience}>
          <ExperienceComponent />
        </div>
        <div className={styles.hobbies}>
          <HobbiesComponent />
        </div>
      </section>
      <section className={styles['app-footer']}>
        <div className={styles.footer}>
          <FooterComponent />
        </div>
      </section>
    </main>
  );
}

export default App;
