import styles from './stack.component.module.scss';
import { IconsLibrary } from '../DATAS/icons';

interface stackElement {
  id: number;
  type: string;
  name: string[];
}

interface StackComponentProps {
  stack?: stackElement[];
}
export function StackComponent({ stack }: StackComponentProps) {
  const defaultStack: stackElement[] = [
    {
      id: 1,
      type: 'Programming Languages:',
      name: ['JavaScript', 'TypeScript'],
    },
    {
      id: 2,
      type: 'Front-end libraries & frameworks:',
      name: ['React', 'Angular'],
    },
    {
      id: 3,
      type: 'Back-end libraries & frameworks:',
      name: ['Node.js'],
    },
    {
      id: 4,
      type: 'UI - Styling:',
      name: ['HTML', 'CSS', 'SASS'],
    },
  ];

  const displayedStack = stack ?? defaultStack;

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>Stack</h1>
        <img className={styles['icon']} src={IconsLibrary.Phone.icon1} alt="phone-icon" />
      </div>

      {displayedStack.map((element, index) => (
        <div key={index} className={styles['stack-wrapper']}>
          <div className={styles['stack-type']}>
            <h2>{element.type}</h2>
          </div>
          <div className={styles['stack-chip']}>
            {element.name.map((item, i) => (
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

export default StackComponent;
