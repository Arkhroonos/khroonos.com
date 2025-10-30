/**
 * Internal Imports
 */
import styles from './marquee.module.scss';

export function Marquee() {
  const skills = ['TypeScript', 'React', 'Next.js', 'Angular', 'Nest.js', 'Sass •'];
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

export default Marquee;
