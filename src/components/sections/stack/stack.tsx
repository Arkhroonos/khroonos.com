/**
 * Internal Imports
 */

import styles from './stack.module.scss';
import { softwaresLibrary, Software } from '../../../data/softwares';
import { informations } from '../../../data/informations';

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

  const displayedStack = stack ?? defaultStack;

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['title-bar-text']}>Stack</h1>
      </div>
      <div className={styles['stack-introduction']}>
        {informations.stackIntroduction?.map((paragraph, index) => (
          <p key={index} className={styles['introduction-text']}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className={styles['stack-infos']}>
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
