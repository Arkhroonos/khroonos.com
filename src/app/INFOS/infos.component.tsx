import styles from './infos.component.module.scss';

export function InfosComponent() {
  return (
    <div className={styles['container']}>
      <h1>InfosComponent!</h1>
      <div className={styles['photowrapper']}>
        <img
          className={styles['photo']}
          src="/src/assets/medias/images/IMG_4497.jpeg"
          alt="Angel on a Horse in Paris by Axel"
        />
      </div>
    </div>
  );
}

export default InfosComponent;
