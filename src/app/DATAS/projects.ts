import { Software, softwaresLibrary } from './softwares';

export interface Work {
  name: string;
  year: string;
  type: string[];
  softwares: Software[];
  description: string;
  images: string[];
}

export const projects: Work[] = [
  {
    name: 'Hexuvium',
    year: '2023',
    type: ['Branding', 'Design', 'Web Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator, softwaresLibrary.Photoshop],
    description: 'Projet de branding et de webdesign.',
    images: ['/images/hexuvium-1.png', '/images/hexuvium-2.png'],
  },
  {
    name: 'Le Rucher Castelainaisien',
    year: '2024',
    type: ['Branding', 'Design', 'Web Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator],
    description: 'Site vitrine pour un producteur de miel local.',
    images: [
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Logo Rucher Castelnaisien Avec Fond.png',
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Etiquette Miel Rucher Castelainaisien avec Fond.png',
    ],
  },
  {
    //TODO: Retirer ce projet & ajouter les autres
    name: 'ACME',
    year: '2025',
    type: ['Branding', 'Design', 'Web Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator],
    description: 'Site vitrine pour un producteur de miel local.',
    images: [
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Logo Rucher Castelnaisien Avec Fond.png',
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Etiquette Miel Rucher Castelainaisien avec Fond.png',
    ],
  },
];
