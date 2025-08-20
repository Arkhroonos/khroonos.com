import styles from './software.component.module.scss';

export interface Software {
  type: string;
  title: string;
  logo: string;
}

interface SoftwaresComponentProps {
  softwares?: Software[];
}
//todo: ajouter les logos des softwares de Webflow, XCODE.

export function SoftwareComponent({ softwares }: SoftwaresComponentProps) {
  const defaultSoftwares: Software[] = [
    { type: 'Management', title: 'Slack', logo: 'src/assets/medias/icons/logos/cib-slack.png' },
    { type: 'Management', title: 'Trello', logo: 'src/assets/medias/icons/logos/cib-trello.png' },
    { type: 'Management', title: 'Notion', logo: 'src/assets/medias/icons/logos/cib-notion.png' },
    { type: 'Design', title: 'Figma', logo: 'src/assets/medias/icons/logos/cib-figma.png' },
    {
      type: 'Design',
      title: 'Adobe Photoshop',
      logo: 'src/assets/medias/icons/logos/cib-adobe-photoshop.png',
    },
    {
      type: 'Design',
      title: 'Adobe Illustrator',
      logo: 'src/assets/medias/icons/logos/cib-adobe-illustrator.png',
    },
    {
      type: 'Development',
      title: 'WebStorm',
      logo: 'src/assets/medias/icons/logos/cib-webstorm.png',
    },
    {
      type: 'Development',
      title: 'Visual Studio Code',
      logo: 'src/assets/medias/icons/logos/cib-visual-studio-code.png',
    },
  ];

  const displayedSoftwares = softwares ?? defaultSoftwares;

  const groupedSoftwares = displayedSoftwares.reduce<Record<string, Software[]>>(
    (acc, software) => {
      if (!acc[software.type]) {
        acc[software.type] = [];
      }
      acc[software.type].push(software);
      return acc;
    },
    {}
  );

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
          <h1 className={styles['title-bar-text']}>Softwares</h1>
        </div>

        {Object.entries(groupedSoftwares).map(([type, softwares]) => (
          <div key={type} className={styles['software-group']}>
            <h2 className={styles['software-type']}>{type}</h2>
            <div className={styles['software-list']}>
              {softwares.map((software, index) => (
                <div key={index} className={styles['software-wrapper']}>
                  <img
                    src={software.logo}
                    alt={software.title}
                    className={styles['software-logo']}
                  />
                  <h3>{software.title}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoftwareComponent;
