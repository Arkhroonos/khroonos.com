import styles from './apprenticeship.component.module.scss';

export function ApprenticeshipComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
        <h1>Alternant - Développeur Full-Stack</h1>
        </div>
        <p>
          3ème Année de Bachelor
          <br /> Concepteur Développeur d’Applications
          <br /> Rythme : 3 Semaines Entreprise / 1 jour Présentiel + E-Learning
          <br />
          Ecole :
          <a
            href="https://etna.io/formation/cycle-bachelor3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ETNA Ivry-Sur-Seine
          </a>
        </p>
      </div>
    </div>
  );
}

export default ApprenticeshipComponent;
