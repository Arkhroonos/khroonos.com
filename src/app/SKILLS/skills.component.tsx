import styles from './skills.component.module.scss';

export function SkillsComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
          <h1 className={styles['title-bar-text']}>Skills:</h1>
        </div>
      </div>
    </div>
  );
}

export default SkillsComponent;
