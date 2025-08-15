import styles from './experience.component.module.scss';

interface Experience {
  date: string;
  title: string;
  description: string[];
}

interface ExperiencesComponentProps {
  experiences?: Experience[];
}
export function ExperienceComponent({ experiences }: ExperiencesComponentProps) {
  const defaultExperiences: Experience[] = [
    {
      date: '2023-2025',
      title: 'Apple Store',
      description: [
        'Formation et accompagnement de clients sur des produits technologiques complexes\n' +
          '                  (iPhone, Mac, iPad).',
        'Résolution de problèmes techniques en direct, avec pédagogie et patience.',
        'Collaboration avec une équipe multidisciplinaire pour atteindre des objectifs\n' +
          '                  communs.',
        'Adaptation rapide aux nouveautés logicielles et matérielles.',
      ],
    },
    {
      date: '2021-2024',
      title: 'Web Designer - Freelance',
      description: [
        'Conception & développement de sites web sur Webflow et WordPress',
        'Création des identités visuelless et supports digitaux',
        'Optimisation SEO et gestion de contenu',
        'Accompagnement des clients dans leur transformation digitale',
      ],
    },
    {
      date: '2021-2024',
      title: 'Hexuvium',
      description: [
        'Gestion de la création et du développement de sites web acvec une équipe de designers et développeurs',
        'Supervision de projets digitaux et coordination des équipes',
        'Mise en place du système de reporting et optimisation des process digitaux',
      ],
    },
    {
      date: '2014-2021',
      title: 'Zara France',
      description: [
        'Gestion du flux client dans un environnement à rythme soutenu',
        'Organisation et optimisation des espaces de vente',
        'Travail en équipe pour atteinte des objectifs chiffrés quotidiens',
        'priorisation des tâches',
      ],
    },
  ];

  const displayedExperiences = experiences ?? defaultExperiences;

  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['title-bar']}>
          <h1 className={styles['title-bar-text']}>Experience:</h1>
        </div>
        {displayedExperiences.map((experience, index) => (
          <div key={index} className={styles['experience-wrapper']}>
            <div className={styles['experience-date']}>
              <p>{experience.date}</p>
            </div>
            <div className={styles['experience-infos']}>
              <h2 className={styles['experience-title-text']}>{experience.title}</h2>
              <div className={styles['experience-description']}>
                <ul className={styles['experience-details-list']}>
                  {experience.description.map((detail, i) => (
                    <li key={i} className={styles['bullet-point']}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceComponent;
