import styles from './hobbies.component.module.scss';
import { IconsLibrary } from '../DATAS/icons';

interface Hobby {
  title: string[];
}

interface HobbiesComponentProps {
  hobbies?: Hobby[];
}

export function HobbiesComponent({ hobbies }: HobbiesComponentProps) {
  const defaultHobbies: Hobby[] = [
    {
      title: [
        'Photographie',
        'Design',
        'Developpement Personnel',
        'Musculation',
        'Jeux Vidéos',
        'Veille Technologique',
      ],
    },
  ];

  const displayedHobbies = hobbies ?? defaultHobbies;
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>Hobbies</h1>
        <img className={styles['icon']} src={IconsLibrary.Phone.icon1} alt="phone-icon" />
      </div>

      {displayedHobbies.map((hobby, index) => (
        <div key={index} className={styles['hobby-wrapper']}>
          <div className={styles['hobby-chip']}>
            {hobby.title.map((item, i) => (
              <div key={i} className={styles['chip']}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HobbiesComponent;
