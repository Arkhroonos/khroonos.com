import styles from './navbar.component.module.scss';

export function NavbarComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
      <h1>NavbarComponent!</h1>
      <div className={styles['mail-button']}>
        <a href="mailto: priam.axel@gmail.com">Contact Me !</a>
        <img itemID={styles['mail-icon']} src="src/assets/medias/iron-man-icons/Vector.svg" alt={"iron-man icon"}/>
      </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
