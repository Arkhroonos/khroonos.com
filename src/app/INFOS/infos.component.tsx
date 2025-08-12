import styles from './infos.component.module.scss';

export function InfosComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['photowrapper']}>
          <img
            className={styles['photo']}
            src="/src/assets/medias/images/IMG_4497.jpeg"
            alt="Angel on a Horse in Paris by Axel"
          />
        </div>
        <div className={styles['ProfileInfos']}>
          <h1 className="Profile-Name">Axel Priam</h1>
        </div>
        <div className={styles['ProfileInfos']}>
          <a href="mailto:" className="Email">
            priam.axel@gmail.com
          </a>
        </div>
        <div className={styles['ProfileInfos']}>
          <a href="tel:+33666483991" className="phoneNumber">
            06.66.48.39.91
          </a>
        </div>
        <div className={styles['ProfileInfos']}>
          <p className="city">Paris 13ème, France</p>
        </div>
      </div>
    </div>
  );
}

export default InfosComponent;
