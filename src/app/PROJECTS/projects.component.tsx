import { useState } from 'react';
import styles from './projects.component.module.scss';
import { projects } from '../DATAS/projects';

export function ProjectsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Limiter à 5 projets
  const limitedProjects = projects.slice(0, 5);
  const project = limitedProjects[currentIndex];

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  // Texte d’introduction
  const projectIntroduction = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
  Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra. 
  Est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. 
  Mauris tincidunt sem sed arcu. Nunc posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat.`;

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>Projects</h1>
      </div>

      <div className={styles['projects-introduction']}>
        <p className={styles['introduction-text']}>{projectIntroduction}</p>
      </div>

      <div className={styles['projects-wrapper']}>
        <div className={styles['work-wrapper']}>
          <div className={styles['project-image']}>
            <img src={project.images?.[0]} alt={project.name} className={styles['image']} />
          </div>

          <div className={styles['overlay']}>
            <h2 className={styles['project-title']}>{project.name}</h2>
            <p className={styles['project-description']}>{project.description}</p>
            <button
              className={styles['project-button']}
              onClick={() => (window.location.href = `/project/${project.id}`)}
            >
              Voir le projet
            </button>
          </div>
        </div>

        {/* Points de navigation */}
        <div className={styles['dots-navigation']}>
          {limitedProjects.map((_, index) => (
            <button
              key={index}
              className={`${styles['dot']} ${index === currentIndex ? styles['active'] : ''}`}
              onClick={() => goToProject(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
