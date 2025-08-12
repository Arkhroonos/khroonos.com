import styles from './navbar.component.module.scss';

export function NavbarComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
      <h1>NavbarComponent!</h1>
      <div className={styles['mail-button']}>
        <a href="mailto: priam.axel@gmail.com">Contact Me !</a>
      </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
