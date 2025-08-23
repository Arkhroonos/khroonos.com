import styles from './apprenticeship.component.module.scss';
import { informations } from '../DATAS/informations';

export function ApprenticeshipComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['apprenticeship-image']}>
          <img className={styles['profile-image']} src={informations.photo} alt="profile-image" />
        </div>
      </div>
      <div className={styles['profile-infos']}>
        <h1>
          {informations.name} {informations.surname}
        </h1>
      </div>

      <div className={styles['apprenticeship-wrapper']}>
        <p className={styles['apprenticeship-text']}>
          2023 - 2024
          <br />
          <a href="https://www.etna.io/" target="_blank" rel="noopener noreferrer">
            ETNA Ivry-Sur-Seine
          </a>
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
