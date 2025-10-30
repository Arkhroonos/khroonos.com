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
  intro: string;
  languages: string[];
  hobbies?: string[];
  story: string;
  //projects?: Work[];
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
  intro:
    'Hey ! Moi c’est Axel ! Après 12 ans dans le commerce (Zara, Apple), j’ai choisi de transformer ma passion pour le web en métier.\n' +
    'Je me forme aujourd’hui en HTML, CSS, JavaScript, TypeScript, React & Angular pour devenir développeur Full-Stack.\n' +
    'Je recherche une alternance pour apprendre vite aux côtés de pros, créer et partager. ',
  languages: ['Anglais', 'Français'],
  story:
    'Hey ! Moi c’est Axel De 2013 à 2025, j’ai passé plus d’une décennie dans le commerce, entre Zara et Apple.\n' +
    'Ces années m’ont appris à garder mon sang-froid dans le rush, à écouter vraiment les besoins des gens (même quand ils ne savent pas eux-mêmes ce qu’ils veulent), et à trouver des solutions rapides. Mais surtout, elles m’ont donné le goût du contact humain et de la transmission.\n' +
    'Aujourd’hui, je mets cette énergie dans une nouvelle aventure : le développement web. Curieux depuis toujours (j’étais ce gamin qui démontait l’ordinateur familial juste pour voir comment ça marche), j’ai décidé de transformer cette passion en métier.\n' +
    'Je me forme en HTML, CSS, JavaScript, TypeScript, React et Angular, avec pour objectif de devenir développeur Full-Stack. Je recherche une alternance pour apprendre encore plus vite, dans un vrai environnement pro, entouré de personnes plus expérimentées que moi.\n' +
    'Mon approche ? Apprendre, créer, partager. Je crois en la progression continue, en la curiosité comme moteur et en l’humour comme meilleur allié quand les choses se compliquent.\n' +
    'En résumé : un ancien vendeur qui a troqué son badge pour des lignes de code, un futur dev motivé, passionné et prêt à construire de belles choses (et à en rire quand ça bug).',
  //projects:[]
};
