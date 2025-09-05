import { useState } from 'react';
import styles from './projects.component.module.scss';
import { projects } from '../DATAS/projects';
import { IconsLibrary } from '../DATAS/icons';

export function ProjectsComponent() {
  // Index du projet actuellement affiché
  const [currentIndex, setCurrentIndex] = useState(0);

  const project = projects[currentIndex]; // projet actuel

  // Fonction pour passer au projet suivant
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Fonction pour passer au projet précédent
  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const projectIntroduction = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium
          tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra. Est
          eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh
          euismod gravida. Mauris tincidunt sem sed arcu. Nunc posuere. Praesent turpis. Aenean
          posuere, tortor sed cursus feugiat.`;

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>Projects</h1>
        <img className={styles['icon']} src={IconsLibrary.Projects.icon2} alt="projects-icon" />
      </div>

      <div className={styles['projects-introduction']}>
        <p className={styles['introduction-text']}>{projectIntroduction}</p>
      </div>

      <div className={styles['projects-wrapper']}>
        <div className={styles['work-wrapper']}>
          <div className={styles['project-header']}>
            <div
              className={styles['project-name']}
              style={{ cursor: 'pointer', backgroundColor: project.color }}
            >
              <h2>{project.name}</h2>
            </div>
          </div>

          <div className={styles['project-content']}>
            <div className={styles['project-image']}>
              <img src={project.images?.[0]} alt={project.name} className={styles['image']} />
            </div>
            <div className={styles['project-infos']}>
              <div className={styles['project-date']}>{project.year}</div>

              <div className={styles['software-logos']}>
                {project.softwares?.map((s, i) => (
                  <img key={i} src={s.logo} alt={s.title} className={styles['software-logo']} />
                ))}
              </div>

              <div className={styles['project-description']}>
                <p>{project.description}</p>
                <p className={styles['project-story']}>{project.story}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flèches navigation */}
        <div className={styles['navigation']}>
          <button onClick={prevProject} className={styles['nav-button']}>
            ◀
          </button>
          <button onClick={nextProject} className={styles['nav-button']}>
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
