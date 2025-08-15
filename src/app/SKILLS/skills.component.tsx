import styles from './skills.component.module.scss';

interface Skill {
  title: string;
  items: string[];
}

interface SkillsComponentProps {
  skills?: Skill[];
}
export function SkillsComponent({ skills }: SkillsComponentProps) {
  const defaultSkills: Skill[] = [
    {
      title: 'Web Design - UI',
      items: ['Creation de Maquette', 'Wireframing', 'Responsive Design'],
    },
    {
      title: 'Branding & Identité Visuelle',
      items: ['Logos', 'Chartes Graphiques'],
    },
    {
      title: 'Contenu & stratégie digitale',
      items: ['Redaction Web', 'Structuration de contenu'],
    },
    {
      title: 'Gestion de projets digitaux',
      items: ['Coordination des équipes', 'Suivi de production'],
    },
  ];

  const displayedSkills = skills ?? defaultSkills;

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
          <h1 className={styles['title-bar-text']}>Skills</h1>
        </div>

        <div className={styles['skills-wrapper']}>
          {displayedSkills.map((skill, index) => (
            <div key={index} className={styles['skill-wrapper']}>
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
    </div>
  );
}

export default SkillsComponent;
