import styles from './rtp-button.component.module.scss';

export function RtpButtonComponent() {
  return (
    <div className={styles['return-button']}>
      <a href="/projects">
        <button className={styles['button']}>Retour aux projets</button>
      </a>
    </div>
  );
}

export default RtpButtonComponent;
