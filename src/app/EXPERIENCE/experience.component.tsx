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
            <p>2021 - 2024</p>
          </div>
            <div className={styles['experience-infos']}>
              <h2 className={styles['experience-title-text']}>
                WEB DESIGNER - FreeLance
              </h2>
              <div className={styles['experience-description']}>
                <p className={styles['experience-description-text']}>
                  Expérience en relation client et gestion commerciale, transférable à l’UX/UI et au digital
                </p>
                <ul className={styles['experience-details-list']}>
                  <li>
                    Conception et développement de sites web sur Webflow et WordPress
                  </li>
                  <li>
                    Création d’identités visuelles et supports digitaux
                  </li>
                  <li>
                    Optimisation SEO et gestion de contenu
                  </li>
                  <li>
                    Accompagnement des clients dans leur transformation digitale
                  </li>


                </ul>
              </div>
            </div>
        </div>


        <div className={styles['experience-wrapper']}>
          <div className={styles['experience-date']}>
            <p>2024 - 2025</p>
          </div>
          <div className={styles['experience-infos']}>
            <h2 className={styles['experience-title-text']}>
              APPLE STORE
            </h2>
            <div className={styles['experience-description']}>
              <p className={styles['experience-description-text']}>
                Expérience en relation client et gestion commerciale, transférable à l’UX/UI et au digital
              </p>
            </div>
          </div>
        </div>


        <div className={styles['experience-wrapper']}>
          <div className={styles['experience-date']}>
            <p>2024 - 2025</p>
          </div>
          <div className={styles['experience-infos']}>
            <h2 className={styles['experience-title-text']}>
              APPLE STORE
            </h2>
            <div className={styles['experience-description']}>
              <p className={styles['experience-description-text']}>
                Expérience en relation client et gestion commerciale, transférable à l’UX/UI et au digital
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ExperienceComponent;
