import styles from './projects.component.module.scss';

export function ProjectsComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
          <h1 className={styles['title-bar-text']}>Projects</h1>
        </div>
        <div className={styles['projects-wrapper']}>
          <ul>
            <li>
              <a href="https://github.com/Arkhroonos" target="_blank" rel="noopener noreferrer">
                Github Projects
              </a>
            </li>
            <li>
              <a
                href="https://khroonos-com-ece6c3.webflow.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Khroonos Webflow Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
