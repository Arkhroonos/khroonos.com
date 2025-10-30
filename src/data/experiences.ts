export interface Experience {
  date: string;
  title: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    date: '2023-2025',
    title: 'Apple Store',
    description: [
      'Formation et accompagnement de clients sur des produits technologiques complexes (iPhone, Mac, iPad).',
      'Résolution de problèmes techniques en direct, avec pédagogie et patience.',
      'Collaboration avec une équipe multidisciplinaire pour atteindre des objectifs communs.',
      'Adaptation rapide aux nouveautés logicielles et matérielles.',
    ],
  },
  {
    date: '2021-2024',
    title: 'Web Designer - Freelance',
    description: [
      'Conception & développement de sites web sur Webflow et WordPress',
      'Création des identités visuelles et supports digitaux',
      'Optimisation SEO et gestion de contenu',
      'Accompagnement des clients dans leur transformation digitale',
    ],
  },
  {
    date: '2021-2024',
    title: 'Hexuvium',
    description: [
      'Gestion de la création et du développement de sites web avec une équipe de designers et développeurs',
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
      'Priorisation des tâches',
    ],
  },
  {
    date: '2012-2014',
    title: 'The Kase',
    description: [
      'Mise en rayon des coques de téléphone personnalisées',
      'Vente de produits personnalisés',
    ],
  },
];
