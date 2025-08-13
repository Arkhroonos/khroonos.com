import styles from './hobbies.component.module.scss';

export function HobbiesComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
          <h1 className={styles['title-bar-text']}>Hobbies:</h1>
        </div>
        <ul className={styles['hobbies-list']}>
          <li>Design & Photographie</li>
          <li>Développement Personnel</li>
          <li>Musculation / Natation</li>
          <li>Jeux vidéo</li>
          <li>Veille technologique</li>
        </ul>
      </div>
    </div>
  );
}

export default HobbiesComponent;
