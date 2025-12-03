/**
 * Internal Imports
 */
import styles from './about.module.scss';
import { informations } from '../../../data/informations';
import linkedin from '../../../assets/medias/icons/logos/Platform=LinkedIn, Color=Negative.svg';
import github from '../../../assets/medias/icons/logos/GitHub-Icon.svg';

//TODO: Verify Icon Links and Data Interfaces
//TODO: Change Intro Text layout.... Too Blocky.

export function About() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>About Me</h1>
      </div>

      <div className={styles['about-introduction']}>
        {informations.intro.map((paragraph, index) => (
          <p key={index} className={styles['introduction-text']}>
            {paragraph}
          </p>
        ))}
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
          <img src="medias/icons/logos/LinkedIn-Icon.svg" alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
        <a
          href={informations.github}
          className={styles['social-link']}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={'/medias/icons/logos/GitHub-Icon.svg'} alt="GitHub" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}

export default About;
