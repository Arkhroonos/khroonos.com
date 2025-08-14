import styles from './navbar.component.module.scss';

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long'
    , year: 'numeric'
    , month: 'long'
    , day: 'numeric'
    }).format(date);
}

export function NavbarComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
      <h1>Hello ! Happy {formatDate(today)}</h1>
      <div className={styles['mail-button']}>
        <a href="mailto: priam.axel@gmail.com">Contact Me !</a>
      </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
