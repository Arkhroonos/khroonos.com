export interface Software {
  type: string;
  title: string;
  logo: string;
}

export const softwaresLibrary: Record<string, Software> = {
  Figma: { type: 'Design', title: 'Figma', logo: 'src/assets/medias/icons/logos/cib-figma.png' },
  Illustrator: {
    type: 'Design',
    title: 'Adobe Illustrator',
    logo: 'src/assets/medias/icons/logos/cib-adobe-illustrator.png',
  },
  Photoshop: {
    type: 'Design',
    title: 'Adobe Photoshop',
    logo: 'src/assets/medias/icons/logos/cib-adobe-photoshop.png',
  },
  WebStorm: {
    type: 'Development',
    title: 'WebStorm',
    logo: 'src/assets/medias/icons/logos/cib-webstorm.png',
  },
  VSCode: {
    type: 'Development',
    title: 'Visual Studio Code',
    logo: 'src/assets/medias/icons/logos/cib-visual-studio-code.png',
  },
  Slack: {
    type: 'Management',
    title: 'Slack',
    logo: 'src/assets/medias/icons/logos/cib-slack.png',
  },
  Trello: {
    type: 'Management',
    title: 'Trello',
    logo: 'src/assets/medias/icons/logos/cib-trello.png',
  },
  Notion: {
    type: 'Management',
    title: 'Notion',
    logo: 'src/assets/medias/icons/logos/cib-notion.png',
  },
};
