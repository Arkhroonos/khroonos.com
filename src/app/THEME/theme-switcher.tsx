/**
 * Internal Imports
 */
import { useState, useEffect } from 'react';
import styles from './theme-switcher.module.scss';

const colorVariants: string[] = ['#F77E2D', '#734E40', '#a5a68f', '#d9ae89', '#850000', '#962E40'];

export function ThemeSwitcher() {
  const [color, setColor] = useState(() => {
    return localStorage.getItem('emphasis-color') || colorVariants[0];
  });

  // Appliquer la couleur au document et la sauvegarder
  useEffect(() => {
    document.documentElement.style.setProperty('--emphasis', color);
    localStorage.setItem('emphasis-color', color);
  }, [color]);

  return (
    <section className={styles['theme-switcher']}>
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
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className={styles['color-picker']}
        />
      </div>
    </section>
  );
}

export default ThemeSwitcher;
