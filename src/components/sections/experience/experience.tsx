import React from 'react';
import styles from './experience.module.scss';
import {
  experiences as defaultExperiences,
  Experience as ExperienceType,
} from '../../../data/experiences';
import { informations } from '../../../data/informations';

interface ExperiencesComponentProps {
  experiences?: ExperienceType[];
}

//TODO: Verify Icon Links and Data Interfaces

export function Experience({ experiences }: ExperiencesComponentProps) {
  const displayedExperiences = experiences ?? defaultExperiences;

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>Experiences</h1>
      </div>
      <div className={styles['introduction']}>
        {informations.experienceIntroduction?.map((paragraph, index) => (
          <p key={index} className={styles['introduction-text']}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className={styles['experiences']}>
        {displayedExperiences.map((experience, index) => (
          <div key={index} className={styles['experience-wrapper']}>
            <div className={styles['experience-infos']}>
              <h2 className={styles['experience-title-text']}>{experience.title}</h2>
            </div>
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
        ))}
      </div>
    </div>
  );
}

export default Experience;
