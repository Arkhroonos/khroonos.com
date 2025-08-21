import styles from './skills.component.module.scss';
import { IconsLibrary } from '../DATAS/icons';

interface Skill {
  id: number;
  title: string;
  items: string[];
}

interface SkillsComponentProps {
  skills?: Skill[];
}
export function SkillsComponent({ skills }: SkillsComponentProps) {
  const defaultSkills: Skill[] = [
    {
      id: 1,
      title: 'Web Design - UI',
      items: ['Creation de Maquette', 'Wireframing', 'Responsive Design'],
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

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>Skills</h1>
        <img className={styles['icon']} src={IconsLibrary.Skills.icon2} alt="phone-icon" />
      </div>

      <div className={styles['skills-wrapper']}>
        {displayedSkills.map((skill, id) => (
          <div key={id} className={styles['skill-wrapper']}>
            <div className={styles['skill-type']}>
              <h2>{skill.title}</h2>
            </div>
            <ul className={styles['skill-list']}>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsComponent;
