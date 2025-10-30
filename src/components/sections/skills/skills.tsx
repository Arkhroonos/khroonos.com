/**
 * Internal Imports
 */
import styles from './skills.module.scss';

interface Skill {
  id: number;
  title: string;
  items: string[];
}

interface SkillsComponentProps {
  skills?: Skill[];
}

export function Skills({ skills }: SkillsComponentProps) {
  const defaultSkills: Skill[] = [
    {
      id: 1,
      title: 'Web Design - UI',
      items: ['Creation de Maquette', 'Responsive Design'],
    },
    {
      id: 2,
      title: 'Branding & Identité Visuelle',
      items: ['Logos', 'Chartes Graphiques'],
    },
    {
      id: 3,
      title: 'Contenu & stratégie digitale',
      items: ['Redaction Web', 'Structuration de contenu'],
    },
    {
      id: 4,
      title: 'Gestion de projets digitaux',
      items: ['Coordination des équipes', 'Suivi de production'],
    },
  ];

  const displayedSkills = skills ?? defaultSkills;
  const skillsIntroduction = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
Nullam varius, turpis et commodo pharetra.
Est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
Integer in mauris eu nibh euismod gravida. Mauris tincidunt sem sed arcu.
Nunc posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat.`;

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>Skills</h1>
      </div>

      <div className={styles['skills-introduction']}>
        <p className={styles['introduction-text']}>{skillsIntroduction}</p>
      </div>

      <div className={styles['skills-wrapper']}>
        {displayedSkills.map((skill, id) => (
          <div key={id} className={styles['skill-wrapper']}>
            <div className={styles['skill-type']}>
              <h2>{skill.title}</h2>
            </div>
            <ul className={styles['skill-list']}>
              {skill.items.map((item, i) => (
                <li key={i} className={styles['skill-item']}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
