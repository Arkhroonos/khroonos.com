/**
 * TypeScript Interface for Informations
 */

export interface Informations {
  photo?: string;
  name: string;
  surname: string;
  nickname: string;
  age: string;
  job: string;
  email: string;
  phone?: string;
  country: string;
  city: string;
  website?: string;
  linkedin?: string;
  medium?: string;
  github?: string;
  intro: string[];
  languages: string[];
  hobbies?: string[];
  story?: string[];
  stackIntroduction?: string[];
  experienceIntroduction?: string[];
  skillsIntroduction?: string[];
  projectsIntroduction?: string[];
}

export const informations: Informations = {
  photo: '/medias/images/Profile Pictures/photo_cv_tshirt_noir.png',
  name: 'Axel',
  surname: 'Priam',
  nickname: 'Khroonos',
  phone: '+33 6 66 48 39 91',
  job: 'Développeur Fullstack',
  age: '34 Ans',
  email: 'priam.axel@gmail.com',
  country: 'France',
  city: 'Paris',
  github: 'https://github.com/Arkhroonos',
  linkedin: 'https://www.linkedin.com/in/axel-priam-07837750/',
  languages: ['Anglais', 'Français'],
  intro: [
    'Hey ! Moi c’est Axel.',
    'Je me forme aujourd’hui au développement web en Bachelor à l’ETNA, avec un objectif clair : devenir développeur Full-Stack et rejoindre une équipe où je pourrai contribuer, apprendre vite et monter en compétences sur des projets ambitieux. ',
    'Je travaille quotidiennement avec JavaScript, TypeScript, React et de plus en plus Angular, un framework dont j’apprécie la structure, la discipline et la vision long terme.',
    'Mon portfolio actuel tourne en React — c’était mon terrain d’apprentissage pour comprendre le front moderne. Mais je prépare sa migration vers Angular, histoire d’aligner mes projets persos avec mon orientation professionnelle et de mettre les mains dans des architectures plus solides.',
    'Avant le développement, j’ai passé plusieurs années dans le commerce, chez Zara puis chez Apple. C’est là que j’ai appris le sens du service, la rigueur, la communication, et surtout la capacité à progresser vite dans des environnements exigeants. ',
    'Aujourd’hui, je mets cette énergie au service du code : j’expérimente, je challenge mes choix, je construis, je casse, je reconstruis mieux.',
    'Je suis en recherche d’une alternance pour accélérer ma progression aux côtés de développeurs expérimentés et contribuer à des projets concrets.',
    'Si tu veux échanger tech, parcours, projets, ou simplement faire connaissance, je suis toujours partant. Les meilleures collaborations commencent souvent par une simple discussion.',
  ],

  experienceIntroduction: [
    "Tout au long de mon parcours, j'ai acquis des compétences solides qui se transfèrent parfaitement dans le développement web.",
    "Chez Apple, j'ai accompagné des clients sur des produits technologiques complexes, résolu des problèmes techniques avec pédagogie et travaillé en équipe pour atteindre des objectifs ambitieux.",
    "En freelance, j'ai créé des sites web, conçu des identités visuelles et optimisé le SEO tout en guidant mes clients dans leur transformation digitale.",
    "Chez Hexuvium, j'ai coordonné des équipes, supervisé des projets et mis en place des process efficaces pour suivre la production.",
    "Mes expériences chez Zara et The Kase m'ont appris l'organisation, la gestion du flux client et la priorisation des tâches dans des environnements exigeants.",
    "Aujourd'hui, ces acquis me permettent de contribuer rapidement et efficacement à des projets web tout en continuant à apprendre et à créer.",
  ],
  skillsIntroduction: [
    '`Je développe aujourd’hui une combinaison de compétences techniques et créatives qui façonnent ma manière de travailler.',
    'Je crée des maquettes solides, pensant chaque interface comme un ensemble clair et cohérent.',
    'Je conçois aussi des logos et des chartes graphiques qui renforcent l’identité d’un projet et guident son esthétique.',
    'Mon approche du responsive design garantit une expérience fluide sur chaque support',
    'J’accorde une réelle importance à la rédaction web et à la structuration de contenu pour transmettre une idée sans détour.',
    'J’ai appris à coordonner les équipes et à assurer le suivi de production pour garder le cap sur les objectifs.',
    'Ces compétences s’entremêlent naturellement dans ma pratique du développement. ',
    'Elles donnent du sens à chaque projet et renforcent ma manière d’aborder le travail. Mon ambition est de continuer à faire évoluer cette polyvalence.',
    'Elle est au cœur de ma progression, de mes projets et de ma vision pour la suite.',
  ],
  stackIntroduction: [
    'Ma stack se construit progressivement et devient le cœur de ma façon de développer.',
    'React et Angular sont mes bases actuelles, et je m’appuie sur TypeScript pour garder un code clair et fiable.',
    'Sass m’aide à structurer mes interfaces et à donner une identité solide à chaque projet que je crée.',
    'Node.js et NestJS me permettent d’explorer le backend avec une logique moderne et orientée architecture.',
    'Docker fait partie de mon workflow pour garder des environnements propres et faciles à gérer.',
    'J’expérimente aussi Python en douceur, histoire d’élargir ma vision du développement.',
    'MongoDB fait partie des technologies que je prévois d’intégrer bientôt.',
    'Redis m’intéresse autant pour la performance que pour la gestion optimisée des données.',
    'Ma stack évolue avec moi, au fil de mes projets et de ma montée en compétence.',
    'Elle reflète mon parcours, mon énergie, et ma manière d’aborder le développement au quotidien.',
  ],

  projectsIntroduction: [
    'Mes projets reflètent l’étape où je me trouve aujourd’hui : une progression assumée, un mélange de créations visuelles et de travaux orientés développement.',
    'Avant de plonger dans le code, j’ai longtemps touché au webdesign. J’ai réalisé des logos, des identités graphiques, des flyers et plusieurs maquettes qui m’ont appris à penser en termes de hiérarchie visuelle, cohérence et expérience utilisateur.',
    'Cette base créative influence encore ma manière de développer : je garde toujours un œil sur ce que voit l’utilisateur final.',
    'Depuis ma formation, mes projets deviennent de plus en plus techniques. Tu trouveras ici mes travaux GitHub — exercices d’école, prototypes personnels, expérimentations autour de React, TypeScript et bientôt Angular.',
    'Ce sont des projets qui évoluent, parfois encore un peu bruts, mais qui témoignent de ma montée en compétences et de mon envie constante de pousser mes connaissances plus loin',
  ],
};
