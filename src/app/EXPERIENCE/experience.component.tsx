import styles from './experience.component.module.scss';
import { experiences as defaultExperiences, Experience } from '../DATAS/experiences';

interface ExperiencesComponentProps {
  experiences?: Experience[];
}

export function ExperienceComponent({ experiences }: ExperiencesComponentProps) {
  const displayedExperiences = experiences ?? defaultExperiences;

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
          <h1 className={styles['title-bar-text']}>Experiences</h1>
        </div>

        {displayedExperiences.map((experience, index) => (
          <div key={index} className={styles['experience-wrapper']}>
            <div className={styles['experience-date']}>
              <p>{experience.date}</p>
            </div>
            <div className={styles['experience-infos']}>
              <h2 className={styles['experience-title-text']}>{experience.title}</h2>
              <div className={styles['experience-description']}>
                <ul className={styles['experience-details-list']}>
                  {experience.description.map((detail, i) => (
                    <li key={i} className={styles['bullet-point']}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceComponent;
