import styles from './marquee.component.module.scss';

export function MarqueeComponent() {
  const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Sass •'];
  const marqueeText = skills.join(' • ');

  return (
    <div className={styles['marquee-wrapper']}>
      <div className={styles['marquee-text']}>
        <span>{marqueeText}</span>
        <span>{marqueeText}</span>
        <span>{marqueeText}</span>
        <span>{marqueeText}</span>
        <span>{marqueeText}</span>
        <span>{marqueeText}</span>
        <span>{marqueeText}</span>
        <span>{marqueeText}</span>
      </div>
    </div>
  );
}

export default MarqueeComponent;
