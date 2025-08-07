// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import 'src/app/app.module.scss';

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
    <main className="app-container">
      <NavbarComponent />
      <InfosComponent />
      <ApprenticeshipComponent />
      <LanguagesComponent />
      <StackComponent />
      <MotivationComponent />
      <ProjectsComponent />
      <SoftwareComponent />
      <SkillsComponent />
      <ExperienceComponent />
      <HobbiesComponent />
    </main>
  );
}

export default App;
