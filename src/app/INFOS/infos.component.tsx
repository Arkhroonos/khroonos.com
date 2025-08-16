import styles from './infos.component.module.scss';

export function InfosComponent() {
  const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Sass •'];
  const marqueeText = skills.join(' • ');

  return (
    <div className={styles['container']}>
      <h1 className={styles['profile-name']}>Axel Priam</h1>
      <div className={styles['marquee-wrapper']}>
        <div className={styles['marquee-text']}>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>
    </div>
  );
}

export default InfosComponent;
