import { Software, softwaresLibrary } from './softwares';

export interface Work {
  name?: string;
  year?: string;
  type?: string[];
  softwares?: Software[];
  description?: string;
  images?: string[];
  color?: string;
  story?: string;
  introduction?: string;
}

export const projects: Work[] = [
  {
    name: 'PESH Neuroeveil',
    year: '2025',
    type: ['Branding', 'Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator],
    description: 'Logo pour une association de neuroeveil destinée aux enfants.',
    images: [
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Logo Rucher Castelnaisien Avec Fond.png',
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Etiquette Miel Rucher Castelainaisien avec Fond.png',
    ],
    color: '#da3e6b',
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
  },

  {
    name: 'Creaesthetic',
    year: '2025',
    type: ['Branding', 'Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator],
    description: 'Carte de visite pour des photographes',
    images: [
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Logo Rucher Castelnaisien Avec Fond.png',
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Etiquette Miel Rucher Castelainaisien avec Fond.png',
    ],
    color: '#000000',
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
  },

  {
    name: 'Hexuvium',
    year: '2024',
    type: ['Branding', 'Design', 'Web Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator, softwaresLibrary.Photoshop],
    description: 'Projet de branding et de webdesign.',
    images: ['/images/hexuvium-1.png', '/images/hexuvium-2.png'],
    color: '#f2d399',
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
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
    color: 'rgba(49,255,207,0.45)',
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
  },
  {
    //TODO: Retirer ce projet & ajouter les autres
    name: 'Dopeland',
    year: '2019',
    type: ['Branding', 'Design', 'Web Design'],
    softwares: [softwaresLibrary.Figma, softwaresLibrary.Illustrator],
    description: 'Site vitrine pour un producteur de miel local.',
    images: [
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Logo Rucher Castelnaisien Avec Fond.png',
      'src/assets/medias/images/Projects Images/Le Rucher Castelainaisien/Etiquette Miel Rucher Castelainaisien avec Fond.png',
    ],
    color: 'rgba(255,134,12,0.71)',
    story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisl nisl tincidunt nisl, eget tincidunt condimentum nisl nisl nisl.',
  },
];
