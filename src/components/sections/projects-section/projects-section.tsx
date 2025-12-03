/**
 * React Imports
 */
import { useState } from 'react';

/**
 * Internal Imports
 */
import styles from './projects-section.module.scss';
import { projects } from '../../../data/projects';
import { informations } from '../../../data/informations';

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Limiter à 5 projets
  const limitedProjects = projects.slice(0, 5);
  const project = limitedProjects[currentIndex];

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>Projects</h1>
      </div>

      <div className={styles['projects-introduction']}>
        {informations.projectsIntroduction?.map((paragraph, index) => (
          <p key={index} className={styles['introduction-text']}>
            {paragraph}
          </p>
        ))}
        <button
          className={styles['allProjects-button']}
          onClick={() => (window.location.href = '/projects')}
        >
          Voir tous les projets
        </button>
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

export default ProjectsSection;
