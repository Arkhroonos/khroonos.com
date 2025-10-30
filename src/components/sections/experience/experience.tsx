import React from 'react';
import styles from './experience.module.scss';
import {
  experiences as defaultExperiences,
  Experience as ExperienceType,
} from '../../../data/experiences';

interface ExperiencesComponentProps {
  experiences?: ExperienceType[];
}

export function Experience({ experiences }: ExperiencesComponentProps) {
  const displayedExperiences = experiences ?? defaultExperiences;
  const experiencesIntroduction = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip. Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium
tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra. Est
eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh
euismod gravida. Mauris tincidunt sem sed arcu. Nunc posuere. Praesent turpis. Aenean
posuere, tortor sed cursus feugiat.`;

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>Experiences</h1>
      </div>
      <div className={styles['introduction']}>
        <p className={styles['introduction-text']}>{experiencesIntroduction}</p>
      </div>

      <div className={styles['experiences']}>
        {displayedExperiences.map((experience, index) => (
          <div key={index} className={styles['experience-wrapper']}>
            <div className={styles['experience-date']}>
              <p>{experience.date}</p>
            </div>
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
