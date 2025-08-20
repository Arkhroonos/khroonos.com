import { useState } from 'react';
import styles from './projects.component.module.scss';
import { GalleryComponent } from '../GALLERY/gallery.component';
import { projects } from '../DATAS/projects';

export function ProjectsComponent() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleProject = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index)); // fermer
    } else {
      setOpenIndexes([...openIndexes, index]); // ouvrir
    }
  };

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
          <h1 className={styles['title-bar-text']}>Projects</h1>
        </div>

        <div className={styles['projects-wrapper']}>
          {projects.map((project, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div key={index} className={styles['work-wrapper']}>
                <div
                  className={styles['project-header']}
                  onClick={() => toggleProject(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <h2>{project.name}</h2>
                  <span>{isOpen ? '▲' : '▼'}</span>
                </div>

                {isOpen && (
                  <div className={styles['project-content']}>
                    <p>
                      {project.year} - {project.description}
                    </p>

                    <div className={styles['software-logos']}>
                      {project.softwares.map((s, i) => (
                        <img
                          key={i}
                          src={s.logo}
                          alt={s.title}
                          className={styles['software-logo']}
                        />
                      ))}
                    </div>
                    <GalleryComponent images={project.images} projectName={project.name} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
