import Link from 'next/link';
import styles from './return-button.module.scss';

export function ReturnButton() {
  return (
    <div className={styles['return-button']}>
      <Link href="/projects">
        <button className={styles['button']}>Retour aux projets</button>
      </Link>
    </div>
  );
}

export default ReturnButton;
