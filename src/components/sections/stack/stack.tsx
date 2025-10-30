/**
 * Internal Imports
 */

import styles from './stack.module.scss';
import { softwaresLibrary, Software } from '../../../data/softwares';

interface stackElement {
  id: number;
  type: string;
  softwares: Software[];
}

interface StackComponentProps {
  stack?: stackElement[];
}

export function Stack({ stack }: StackComponentProps) {
  const defaultStack: stackElement[] = [
    {
      id: 1,
      type: 'Programming Languages:',
      softwares: [softwaresLibrary.Javascript, softwaresLibrary.TypeScript],
    },
    {
      id: 2,
      type: 'Front-end libraries & frameworks:',
      softwares: [softwaresLibrary.React, softwaresLibrary.Angular],
    },
    {
      id: 3,
      type: 'Back-end libraries & frameworks:',
      softwares: [softwaresLibrary.NodeJS, softwaresLibrary.Nestjs],
    },
    {
      id: 4,
      type: 'UI - Styling:',
      softwares: [softwaresLibrary.HTML, softwaresLibrary.CSS, softwaresLibrary.SASS],
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
      </div>
      <div className={styles['stack-infos']}>
        <p className={styles['stack-text']}>{stackText}</p>
        {displayedStack.map((element, index) => (
          <div key={index} className={styles['stack-wrapper']}>
            <div className={styles['stack-type']}>
              <h2>{element.type}</h2>
            </div>
            <div className={styles['stack-chip']}>
              {element.softwares.map((software, i) => (
                <div key={i} className={styles['chip']} title={software.title}>
                  <img src={software.logo} alt={software.title} className={styles['chip-icon']} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
