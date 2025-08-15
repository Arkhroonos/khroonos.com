import styles from './infos.component.module.scss';

export function InfosComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className="Profile-Name">Axel Priam</h1>
      </div>
      <div className={styles['marquee-wrapper']}></div>
    </div>
  );
}

export default InfosComponent;
