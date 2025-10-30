/**
 * React Imports
 */
import React from 'react';

/**
 * Internal Imports
 */
import { Work } from '../../data/projects';
import styles from './project-card.module.scss';

interface ProjectCardProps {
  project: Work;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const handleClick = () => {
    window.location.href = `/project/${project.id}`;
  };

  return (
    <div className={styles['project-card']} onClick={handleClick}>
      {/* Image de la carte */}
      <div className={styles['card-image']}>
        {project.images && project.images.length > 0 ? (
          <img src={project.images[0]} alt={project.name} className={styles['image']} />
        ) : (
          <div className={styles['placeholder-image']}>
            <span>No Image</span>
          </div>
        )}
      </div>

      {/* Overlay avec les informations */}
      <div className={styles['card-overlay']}>
        <div className={styles['card-header']}>
          <h3 className={styles['project-name']}>{project.name}</h3>
          {project.year && <span className={styles['project-year']}>{project.year}</span>}
        </div>

        <p className={styles['project-description']}>{project.description}</p>

        {/* Tags de type */}
        {project.type && project.type.length > 0 && (
          <div className={styles['project-types']}>
            {project.type.map((type, index) => (
              <span key={index} className={styles['type-tag']}>
                {type}
              </span>
            ))}
          </div>
        )}

        {/* Technologies utilisées */}
        {project.softwares && project.softwares.length > 0 && (
          <div className={styles['project-technologies']}>
            {project.softwares.slice(0, 4).map((software, index) => (
              <img
                key={index}
                src={software.logo}
                alt={software.title}
                title={software.title}
                className={styles['tech-icon']}
              />
            ))}
            {project.softwares.length > 4 && (
              <span className={styles['more-techs']}>+{project.softwares.length - 4}</span>
            )}
          </div>
        )}

        <button className={styles['view-button']}>Voir le projet</button>
      </div>
    </div>
  );
}

export default ProjectCard;
