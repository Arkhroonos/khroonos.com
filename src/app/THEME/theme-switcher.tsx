import { useState, useEffect } from 'react';
import styles from './theme-switcher.module.scss';

const colorVariants = ['#F77E2D', '#734E40', '#a5a68f', '#d9ae89', '#850000', '#962E40'];

export function ThemeSwitcher() {
  const [color, setColor] = useState(colorVariants[0]);

  // Dès que color change → met à jour la variable CSS
  useEffect(() => {
    document.documentElement.style.setProperty('--emphasis', color);
  }, [color]);

  return (
    <div className={styles['color-buttons']}>
      {colorVariants.map((c, i) => (
        <button
          key={i}
          className={styles['color-button']}
          style={{ backgroundColor: c }}
          onClick={() => setColor(c)}
          aria-label={`Set theme color to ${c}`}
        />
      ))}
    </div>
  );
}

export default ThemeSwitcher;
