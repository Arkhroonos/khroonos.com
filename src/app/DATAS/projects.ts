/**
 * TypeScript Interface for Work
 */

import { Software, softwaresLibrary } from './softwares';

export interface Work {
  name?: string;
  year?: string;
  type?: string[];
  softwares?: Software[];
  description?: string;
  images?: string[];
  story?: string;
  introduction?: string;
  id: string;
}

export const projects: Work[] = [
  {
    id: '6',
    name: 'Aichef',
    year: '2025',
    type: ['Application'],
    softwares: [softwaresLibrary.Angular, softwaresLibrary.Nestjs],
    description:
      'Application de création de recettes de cuisine via une Intelligence Artificielle.',
    images: ['src/assets/medias/images/Projects Images/Aichef/Aichef-Logo.svg'],
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
  },

  {
    id: '5',
    name: 'PESH Neuroeveil',
    year: '2025',
    type: ['Branding', 'Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator],
    description: 'Logo pour une association de neuroeveil destinée aux enfants.',
    images: ['src/assets/medias/images/Projects Images/PESH NeuroEveil/Logo PESH Taille 3.png'],
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
  },

  {
    id: '4',
    name: 'Creaesthetic',
    year: '2025',
    type: ['Branding', 'Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator],
    description: 'Carte de visite pour des photographes',
    images: ['src/assets/medias/images/Projects Images/Creaesthetic/Nardo Grey.png'],
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
  },

  {
    id: '3',
    name: 'Hexuvium',
    year: '2024',
    type: ['Branding', 'Design', 'Web Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator, softwaresLibrary.Photoshop],
    description: 'Projet de branding et de webdesign.',
    images: ['src/assets/medias/images/Projects Images/Hexuvium/Hexuvium Pillows.png'],
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
  },

  {
    id: '2',
    name: 'Le Rucher Castelainaisien',
    year: '2024',
    type: ['Branding', 'Design', 'Web Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator],
    description: 'Site vitrine pour un producteur de miel local.',
    images: [
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Abeille Rucher Castelainaisien - Avec Fond .png',
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Logo Rucher Castelnaisien Avec Fond.png',
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Etiquette Miel Rucher Castelainaisien avec Fond.png',
    ],
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
  },
  {
    //TODO: Retirer ce projet & ajouter les autres
    id: '1',
    name: 'The Dopestore',
    year: '2019',
    type: ['Branding', 'Design', 'Web Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator],
    description: 'Site vitrine pour un producteur de miel local.',
    images: ['src/assets/medias/images/Projects Images/Dopestore/Dope Store.png'],
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
  },
];
