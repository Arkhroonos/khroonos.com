import styles from './software.component.module.scss';
import { softwaresLibrary, Software } from '../DATAS/softwares';

interface SoftwaresComponentProps {
  softwares?: Software[];
  exclude?: string[];
}
//TODO: Corriger le problème d'exclusion de logiciels
export function SoftwareComponent({ softwares, exclude = [] }: SoftwaresComponentProps) {
  let displayedSoftwares: Software[] = softwares ?? Object.values(softwaresLibrary);

  displayedSoftwares = displayedSoftwares.filter((software) => !exclude.includes(software.title));

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
              {softwares.map((software) => (
                <div key={software.title} className={styles['software-wrapper']}>
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
