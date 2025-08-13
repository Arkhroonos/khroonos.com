import styles from './motivation.component.module.scss';

export function MotivationComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
          <h1 className={styles['title-bar-text']}>Motivation:</h1>
        </div>
        <div className={styles['content']}>
          <p>
            Actuellement à la recherche d’un poste de développeur Full-Stack en
            alternance pour consolider mes compétences techniques en
            environnement professionnel.
            <br />
            Connaissance des bases de HTML, CSS, JavaScript.
            <br />
            Sens aigu de l’expérience utilisateur, capacité à collaborer avec
            des équipes pluridisciplinaires, et approche orientée résultat,
            innovation et progression continue.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MotivationComponent;
