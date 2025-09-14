import styles from './motivation.component.module.scss';
import { informations } from '../DATAS/informations';

export function MotivationComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>About Me</h1>
      </div>

      <div className={styles['infos-wrapper']}>
        <div className={styles['info-wrapper']}>
          <p className={styles['info-text']}>{informations.city}</p>
        </div>
        <div className={styles['info-wrapper']}>
          <p className={styles['info-text']}>{informations.languages[0]}</p>
        </div>
        <div className={styles['info-wrapper']}>
          <p className={styles['info-text']}>{informations.age}</p>
        </div>
        <div className={styles['content']}>
          <p className={styles['about-text']}>{informations.intro}</p>
        </div>
      </div>
    </div>
  );
}

export default MotivationComponent;
