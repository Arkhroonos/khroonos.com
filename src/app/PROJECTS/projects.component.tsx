import styles from './projects.component.module.scss';
import { projects } from '../DATAS/projects';
import { IconsLibrary } from '../DATAS/icons';

export function ProjectsComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>Projects</h1>
        <img className={styles['icon']} src={IconsLibrary.Projects.icon2} alt="phone-icon" />
      </div>

      <div className={styles['projects-wrapper']}>
        {projects.map((project, index) => (
          <div key={index} className={styles['work-wrapper']}>
            <div className={styles['project-header']} style={{ cursor: 'pointer' }}>
              <div className={styles['project-name']}>
                <h2>{project.name}</h2>
              </div>
            </div>

            <div className={styles['project-content']}>
              <div className={styles['project-image']}>
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className={styles['project-image']}
                />
              </div>
              <div className={styles['project-infos']}>
                <div className={styles['project-date']}>{project.year}</div>

                <div className={styles['software-logos']}>
                  {project.softwares.map((s, i) => (
                    <img key={i} src={s.logo} alt={s.title} className={styles['software-logo']} />
                  ))}
                </div>

                <div className={styles['project-description']}>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsComponent;
