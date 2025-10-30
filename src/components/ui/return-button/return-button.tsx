import styles from './return-button.module.scss';

export function ReturnButton() {
  return (
    <div className={styles['return-button']}>
      <a href="/projects">
        <button className={styles['button']}>Retour aux projets</button>
      </a>
    </div>
  );
}

export default ReturnButton;
