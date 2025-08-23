import styles from './navbar.component.module.scss';
import { IconsLibrary } from '../DATAS/icons';
import { informations } from '../DATAS/informations';

const today = new Date();

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function NavbarComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['name']}>
          {informations.name} {informations.surname}
        </h1>
      </div>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['date']}>{formatDate(today)}</h1>
      </div>
      <div className={styles['content-wrapper']}>
        <a href="tel:+33666483991" className={styles['contact-link']}>
          <img className={styles['icon']} src={IconsLibrary.Phone.icon2} alt="phone-icon" />
        </a>
        <a href="mailto:priam.axel@gmail.com" className={styles['contact-link']}>
          <img className={styles['icon']} src={IconsLibrary.Mail.icon2} alt="mail-icon" />
        </a>
      </div>
    </div>
  );
}

export default NavbarComponent;
