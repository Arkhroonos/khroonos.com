/**
 * Internal Imports
 */
import styles from './hero.module.scss';
import { IconsLibrary } from '../../../data/icons';
import { informations } from '../../../data/informations';

export function Hero() {
  return (
    <>
      <div className={styles['container']}>
        <h1 className={styles['profile-name']}>
          {informations.name}
          <br /> {informations.surname}
        </h1>
        <h2 className={styles['job-name']}>{informations.job}</h2>
      </div>
      <img
        className={styles['mouse']}
        src={IconsLibrary.Mouse.icon1}
        alt={IconsLibrary.Mouse.alt}
      />
    </>
  );
}

export default Hero;
