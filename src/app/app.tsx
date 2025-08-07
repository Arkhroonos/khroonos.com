// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import styles from 'src/app/app.module.scss';

import NavbarComponent from './NAVBAR/navbar.component';
import InfosComponent from './INFOS/infos.component';
import ApprenticeshipComponent from './APPRENTICESHIP/apprenticeship.component';
import LanguagesComponent from './LANGUAGES/languages.component';
import StackComponent from './STACK/stack.component';
import MotivationComponent from './MOTIVATION/motivation.component';
import ProjectsComponent from './PROJECTS/projects.component';
import SoftwareComponent from './SOFTWARE/software.component';
import SkillsComponent from './SKILLS/skills.component';
import ExperienceComponent from './EXPERIENCE/experience.component';
import HobbiesComponent from './HOBBIES/hobbies.component';

export function App() {
  return (
    <main className={styles['app-container']}>
      <div className={styles.navbar}>
        <NavbarComponent />
      </div>
      <div className={styles.infos}>
        <InfosComponent />
      </div>
      <div className={styles.apprenticeship}>
        <ApprenticeshipComponent />
      </div>
      <div className={styles.languages}>
        <LanguagesComponent />
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
      <div className={styles.software}>
        <SoftwareComponent />
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
    </main>
  );
}

export default App;
