import styles from './software.component.module.scss';

interface Software {
  type: string;
  title: string[];
}

interface SoftwaresComponentProps {
  softwares?: Software[];
}

export function SoftwareComponent({ softwares }: SoftwaresComponentProps) {
  const defaultSoftwares: Software[] = [
    {
      type: 'Communication & Management',
      title: ['Slack', 'Airtable', 'Notion', 'Trello'],
    },
    {
      type: 'Design',
      title: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
    },
    {
      type: 'Developpement',
      title: ['Xcode', 'Visual Studio Code', 'WebStorm'],
    },
  ];

  const displayedSoftwares = softwares ?? defaultSoftwares;

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
          <h1 className={styles['title-bar-text']}>Softwares</h1>
        </div>
        {displayedSoftwares.map((software, index) => (
          <div key={index} className={styles['software-wrapper']}>
            <div className={styles['software-type']}>
              <h2>{software.type}</h2>
              <ul className={styles['software-list']}>
                {software.title.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoftwareComponent;
