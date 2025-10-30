/**
 * React Imports
 */
import { useState } from 'react';

/**
 * Internal Imports
 */

import styles from './navbar.module.scss';
import ThemeSwitcher from '../theme-switcher/theme-switcher';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <section className={styles['navbar']}>
      <div className={styles['container']}>
        <div className={styles['content-wrapper']}>
          <div className={styles['nav-link']}>
            <a href="/" className={styles['link']}>
              <img
                className={styles['icon']}
                src={'src/assets/medias/icons/icons/home.svg'}
                alt="home button"
              />
            </a>
          </div>
          <div className={styles['nav-link']}>
            <a href="/about" className={styles['link']}>
              About Me
            </a>
          </div>
          <div className={styles['nav-link']}>
            <a href="/projects" className={styles['link']}>
              Projects
            </a>
          </div>
          <div className={styles['nav-link']}>
            <a href="/#stack" className={styles['link']}>
              Stack
            </a>
          </div>
          <div className={styles['nav-link']}>
            <a href="/#experiences" className={styles['link']}>
              Experiences
            </a>
          </div>
        </div>
      </div>

      <div className={styles['menu-wrapper']}>
        <div className={styles['menu-button']}>
          <button onClick={toggleMenu}>
            <img
              className={styles['icon']}
              src={'src/assets/medias/icons/icons/home.svg'}
              alt="menu button"
            />
          </button>
          {isMenuOpen && (
            <div className={styles['menu-content']}>
              <div className={styles['menu-item']}>
                <div className={styles['nav-link']}>
                  <a href="/" className={styles['link']} onClick={handleLinkClick}>
                    Home
                  </a>
                </div>
                <div className={styles['nav-link']}>
                  <a href="/about" className={styles['link']} onClick={handleLinkClick}>
                    About Me
                  </a>
                </div>
                <div className={styles['nav-link']}>
                  <a href="/projects" className={styles['link']} onClick={handleLinkClick}>
                    Projects
                  </a>
                </div>
                <div className={styles['nav-link']}>
                  <a href="/#stack" className={styles['link']} onClick={handleLinkClick}>
                    Stack
                  </a>
                </div>
                <div className={styles['nav-link']}>
                  <a href="/#experiences" className={styles['link']} onClick={handleLinkClick}>
                    Experiences
                  </a>
                </div>
                <div className={styles['nav-link']}>
                  <a href="/#contact" className={styles['link']} onClick={handleLinkClick}>
                    Contact
                  </a>
                </div>
                <div className={styles['theme-switcher']}>
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Navbar;
