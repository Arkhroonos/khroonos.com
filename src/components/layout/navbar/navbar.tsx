/**
 * React Imports
 */
import { useState } from 'react';
import Link from 'next/link';

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
            <Link href="/" className={styles['link']}>
              Home
            </Link>
          </div>
          <div className={styles['nav-link']}>
            <Link href="/about" className={styles['link']}>
              About
            </Link>
          </div>
          <div className={styles['nav-link']}>
            <Link href="/projects" className={styles['link']}>
              Projects
            </Link>
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
          <div className={styles['theme-switcher-desktop']}></div>
        </div>
      </div>

      <div className={styles['menu-wrapper']}>
        <button className={styles['hamburger']} onClick={toggleMenu} aria-label="Toggle menu">
          <span
            className={`${styles['hamburger-line']} ${isMenuOpen ? styles['open'] : ''}`}
          ></span>
          <span
            className={`${styles['hamburger-line']} ${isMenuOpen ? styles['open'] : ''}`}
          ></span>
          <span
            className={`${styles['hamburger-line']} ${isMenuOpen ? styles['open'] : ''}`}
          ></span>
        </button>

        {isMenuOpen && (
          <div className={styles['menu-content']}>
            <div className={styles['menu-item']}>
              <Link href="/" className={styles['link']} onClick={handleLinkClick}>
                Home
              </Link>
            </div>
            <div className={styles['menu-item']}>
              <Link href="/about" className={styles['link']} onClick={handleLinkClick}>
                About
              </Link>
            </div>
            <div className={styles['menu-item']}>
              <Link href="/projects" className={styles['link']} onClick={handleLinkClick}>
                Projects
              </Link>
            </div>
            <div className={styles['menu-item']}>
              <a href="/#stack" className={styles['link']} onClick={handleLinkClick}>
                Stack
              </a>
            </div>
            <div className={styles['menu-item']}>
              <a href="/#experiences" className={styles['link']} onClick={handleLinkClick}>
                Experiences
              </a>
            </div>
            <div className={styles['menu-item']}>
              <a href="/#contact" className={styles['link']} onClick={handleLinkClick}>
                Contact
              </a>
            </div>
            <div className={styles['theme-switcher']}>
              <ThemeSwitcher />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Navbar;
