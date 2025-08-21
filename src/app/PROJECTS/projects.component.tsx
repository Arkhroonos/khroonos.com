import { useState } from 'react';
import styles from './projects.component.module.scss';
import { GalleryComponent } from '../GALLERY/gallery.component';
import { projects } from '../DATAS/projects';
import { IconsLibrary } from '../DATAS/icons';

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
        <h1 className={styles['title-bar-text']}>Projects</h1>
        <img className={styles['icon']} src={IconsLibrary.Phone.icon1} alt="phone-icon" />
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
                <div className={styles['project-name']}>
                  <h2>{project.name}</h2>
                </div>
                <span>{isOpen ? '-' : '+'}</span>
              </div>

              {isOpen && (
                <div className={styles['project-content']}>
                  <div className={styles['project-gallery']}>
                    <GalleryComponent images={project.images} projectName={project.name} />
                  </div>

                  <div className={styles['project-infos']}>
                    <div className={styles['project-date']}>{project.year}</div>

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

                    <div className={styles['project-description']}>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsComponent;
