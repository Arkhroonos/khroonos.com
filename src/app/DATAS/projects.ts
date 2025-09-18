import { Software, softwaresLibrary } from './softwares';

export interface Work {
  name?: string;
  year?: string;
  type?: string[];
  softwares?: Software[] | undefined;
  description?: string;
  images?: string[];
  story?: string;
  introduction?: string;
  id: string;
}

export const projects: Work[] = [
  {
    id: '1',
    name: 'PESH Neuroeveil',
    year: '2025',
    type: ['Branding', 'Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator],
    description: 'Logo pour une association de neuroeveil destinée aux enfants.',
    images: [
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Logo Rucher Castelnaisien Avec Fond.png',
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Etiquette Miel Rucher Castelainaisien avec Fond.png',
    ],
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
  },

  {
    id: '2',
    name: 'Creaesthetic',
    year: '2025',
    type: ['Branding', 'Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator],
    description: 'Carte de visite pour des photographes',
    images: [
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Logo Rucher Castelnaisien Avec Fond.png',
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Etiquette Miel Rucher Castelainaisien avec Fond.png',
    ],
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
    images: ['/images/hexuvium-1.png', '/images/hexuvium-2.png'],
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
  },

  {
    id: '4',
    name: 'Le Rucher Castelainaisien',
    year: '2024',
    type: ['Branding', 'Design', 'Web Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator],
    description: 'Site vitrine pour un producteur de miel local.',
    images: [
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Logo Rucher Castelnaisien Avec Fond.png',
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Etiquette Miel Rucher Castelainaisien avec Fond.png',
    ],
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
  },
  {
    //TODO: Retirer ce projet & ajouter les autres
    id: '5',
    name: 'Dopeland',
    year: '2019',
    type: ['Branding', 'Design', 'Web Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator],
    description: 'Site vitrine pour un producteur de miel local.',
    images: [
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Logo Rucher Castelnaisien Avec Fond.png',
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Etiquette Miel Rucher Castelainaisien avec Fond.png',
    ],
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
  },
];
