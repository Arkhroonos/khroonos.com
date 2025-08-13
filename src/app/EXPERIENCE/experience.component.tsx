import styles from './experience.component.module.scss';

export function ExperienceComponent() {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
       <div className={styles['title-bar']}>
         <h1 className={styles['title-bar-text']}>Experience:</h1>
       </div>

        <div className={styles['experience-wrapper']}>
          <div className={styles['experience-date']}>
            <p>2023 <br/> - <br/> 2025</p>
          </div>
          <div className={styles['experience-infos']}>
            <h2 className={styles['experience-title-text']}>
              APPLE STORE - Specialiste
            </h2>
            <div className={styles['experience-description']}>
              <ul className={styles['experience-details-list']}>
              <li className={styles['bullet-point']}>Formation et accompagnement de clients sur des produits technologiques complexes (iPhone, Mac, iPad).</li>
              <li className={styles['bullet-point']}>Résolution de problèmes techniques en direct, avec pédagogie et patience.</li>
              <li className={styles['bullet-point']}>Collaboration avec une équipe multidisciplinaire pour atteindre des objectifs communs.</li>
              <li className={styles['bullet-point']}>Adaptation rapide aux nouveautés logicielles et matérielles.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles['experience-wrapper']}>
          <div className={styles['experience-date']}>
            <p>2021 <br/> - <br/> 2024</p>
          </div>
            <div className={styles['experience-infos']}>
              <h2 className={styles['experience-title-text']}>
                WEB DESIGNER - FreeLance
              </h2>
              <div className={styles['experience-description']}>
                <ul className={styles['experience-details-list']}>
                  <li className={styles['bullet-point']}>Conception et développement de sites web sur Webflow et WordPress</li>
                  <li className={styles['bullet-point']}>Création d’identités visuelles et supports digitaux</li>
                  <li className={styles['bullet-point']}>Optimisation SEO et gestion de contenu</li>
                  <li className={styles['bullet-point']}>Accompagnement des clients dans leur transformation digitale</li>
                </ul>
              </div>
            </div>
        </div>


        <div className={styles['experience-wrapper']}>
          <div className={styles['experience-date']}>
            <p>2021 <br/> - <br/> 2024</p>
          </div>
          <div className={styles['experience-infos']}>
            <h2 className={styles['experience-title-text']}>
              HEXUVIUM & LUTECE AGENCY - Gestionnaire Opérationnel
            </h2>
            <div className={styles['experience-description']}>
             <ul className={styles['experience-details-list']}>
               <li className={styles['bullet-point']}>Gestion de la création et du développement de sites web avec une équipe de designers et développeurs</li>
               <li className={styles['bullet-point']}>Supervision de projets digitaux et coordination des équipes</li>
               <li className={styles['bullet-point']}>Mise en place d’un système de reporting et optimisation des process digitaux</li>
               <li className={styles['bullet-point']}>Création de sites internet et utilisation d’outils spécialisés : beds24.com, Turno, Airtable, AirDNA, Uplisting</li>
             </ul>
            </div>
          </div>
        </div>

        <div className={styles['experience-wrapper']}>
          <div className={styles['experience-date']}>
            <p>2014 <br/> - <br/> 2021</p>
          </div>
          <div className={styles['experience-infos']}>
            <h2 className={styles['experience-title-text']}>
              ZARA - Conseiller Commercial
            </h2>
            <div className={styles['experience-description']}>
              <ul className={styles['experience-details-list']}>
              <li className={styles['bullet-point']}>Gestion d’un flux client important dans un environnement à rythme soutenu</li>
              <li className={styles['bullet-point']}>Organisation et optimisation des espaces de vente pour maximiser la lisibilité et l’accessibilité des produits.</li>
              <li className={styles['bullet-point']}>Travail en équipe pour respecter des délais stricts et atteindre des objectifs quotidiens.</li>
              <li className={styles['bullet-point']}>Priorisation rapide des tâches en fonction des besoins immédiats.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ExperienceComponent;
