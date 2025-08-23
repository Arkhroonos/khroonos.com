import styles from './infos.component.module.scss';
import { IconsLibrary } from '../DATAS/icons';
import { informations } from '../DATAS/informations';

export function InfosComponent() {
  return (
    <>
      <div className={styles['container']}>
        <h1 className={styles['profile-name']}>
          {informations.name} {informations.surname}
        </h1>
        <h2 className={styles['job']}>{informations.job}</h2>
      </div>
      <img
        className={styles['mouse']}
        src={IconsLibrary.Mouse.icon1}
        alt={IconsLibrary.Mouse.alt}
      />
    </>
  );
}

export default InfosComponent;
