import styles from './projects.component.module.scss';

export function ProjectsComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
          <h1 className={styles['title-bar-text']}>Projects:</h1>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
