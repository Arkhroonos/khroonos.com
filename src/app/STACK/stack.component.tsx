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

  const stackText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
Nullam varius, turpis et commodo pharetra.
Est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
Integer in mauris eu nibh euismod gravida. Mauris tincidunt sem sed arcu.
Nunc posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat.`;

  const displayedStack = stack ?? defaultStack;

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>Stack</h1>
        <img className={styles['icon']} src={IconsLibrary.Stack.icon2} alt="phone-icon" />
      </div>
      <div className={styles['stack-infos']}>
        <p className={styles['stack-text']}>{stackText}</p>
        {displayedStack.map((element, index) => (
          <div key={index} className={styles['stack-wrapper']}>
            <div className={styles['stack-type']}>
              <h2>{element.type}</h2>
            </div>
            <div className={styles['stack-chip']}>
              {element.name.map((item, i) => (
                <div key={i} className={styles['chip']}>
                  {item}
                  {}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackComponent;
