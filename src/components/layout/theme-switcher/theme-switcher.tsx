/**
 * Internal Imports
 */
import { useState, useEffect } from 'react';
import styles from './theme-switcher.module.scss';

const colorVariants: string[] = ['#a5a68f', '#F77E2D', '#850000'];

export function ThemeSwitcher() {
  const [color, setColor] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('emphasis-color') || colorVariants[0];
    }
    return colorVariants[0];
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--emphasis', color);
    if (typeof window !== 'undefined') {
      localStorage.setItem('emphasis-color', color);
    }
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
//Todo: Créer d’autres --Emphasis (ex —Button-emphasis..etc) les définir et les 'distribuer' aux éléments correspondants
// puis faire les changement dans le thème switcher et appliquer le 'if'…
