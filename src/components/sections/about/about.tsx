/**
 * Internal Imports
 */
import styles from './about.module.scss';
import { informations } from '../../../data/informations';
import LinkedInIcon from '../../../assets/medias/icons/logos/Platform=LinkedIn, Color=Negative.svg';
import GitHubIcon from '../../../assets/medias/icons/logos/Platform=Github, Color=Negative.svg';

export function About() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>About Me</h1>
      </div>

      <div className={styles['introduction']}>
        <p className={styles['introduction-text']}>{informations.intro}</p>
      </div>

      <div className={styles['infos-grid']}>
        <div className={styles['info-card']}>
          <h3 className={styles['info-label']}>Location</h3>
          <p className={styles['info-text']}>{informations.city}</p>
        </div>
        <div className={styles['info-card']}>
          <h3 className={styles['info-label']}>Language</h3>
          <p className={styles['info-text']}>{informations.languages[0]}</p>
        </div>
        <div className={styles['info-card']}>
          <h3 className={styles['info-label']}>Age</h3>
          <p className={styles['info-text']}>{informations.age}</p>
        </div>
      </div>

      <div className={styles['social-links']}>
        <a
          href={informations.linkedin}
          className={styles['social-link']}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInIcon} alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
        <a
          href={informations.github}
          className={styles['social-link']}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} alt="GitHub" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}

export default About;
