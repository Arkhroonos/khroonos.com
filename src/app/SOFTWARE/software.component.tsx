import styles from './software.component.module.scss';

export function SoftwareComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
          <h1 className={styles['title-bar-text']}>Softwares:</h1>
        </div>
      </div>
    </div>
  );
}

export default SoftwareComponent;
