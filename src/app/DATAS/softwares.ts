export interface Software {
  type: string;
  title: string;
  logo: string;
}

export const softwaresLibrary: Record<string, Software> = {
  Figma: {
    type: 'Design',
    title: 'Figma',
    logo: 'src/assets/medias/icons/logos/Figma_Symbol_0.svg',
  },
  Illustrator: {
    type: 'Design',
    title: 'Adobe Illustrator',
    logo: 'src/assets/medias/icons/logos/cib-adobe-illustrator.svg',
  },
  Photoshop: {
    type: 'Design',
    title: 'Adobe Photoshop',
    logo: 'src/assets/medias/icons/logos/cib-adobe-photoshop.svg',
  },
  WebStorm: {
    type: 'Development',
    title: 'WebStorm',
    logo: 'src/assets/medias/icons/logos/cib-webstorm.svg',
  },
  VSCode: {
    type: 'Development',
    title: 'Visual Studio Code',
    logo: 'src/assets/medias/icons/logos/cib-visual-studio-code.svg',
  },
  Slack: {
    type: 'Management',
    title: 'Slack',
    logo: 'src/assets/medias/icons/logos/cib-slack.svg',
  },
  Trello: {
    type: 'Management',
    title: 'Trello',
    logo: 'src/assets/medias/icons/logos/cib-trello.svg',
  },
  Notion: {
    type: 'Management',
    title: 'Notion',
    logo: 'src/assets/medias/icons/logos/cib-notion.svg',
  },

  Webflow: {
    type: 'Web Design',
    title: 'Webflow',
    logo: 'src/assets/medias/icons/logos/Webflow_idbjN5tmQv_0.svg', //TODO: Chercher Logo
  },
  Javascript: {
    type: 'Programming Languages',
    title: 'JavaScript',
    logo: 'src/assets/medias/icons/logos/cib-js.svg',
  },
  TypeScript: {
    type: 'Programming Languages',
    title: 'TypeScript',
    logo: 'src/assets/medias/icons/logos/cib-typescript.svg',
  },
  React: {
    type: 'Front-end libraries & frameworks',
    title: 'React',
    logo: 'src/assets/medias/icons/logos/cib-react.svg',
  },
  Angular: {
    type: 'Front-end libraries & frameworks',
    title: 'Angular',
    logo: 'src/assets/medias/icons/logos/cib-angular.svg',
  },

  Nodejs: {
    type: 'Back-end libraries & frameworks',
    title: 'Node.js',
    logo: 'src/assets/medias/icons/logos/cib-nodejs.svg',
  },
  HTML: {
    type: 'UI - Styling',
    title: 'HTML',
    logo: 'src/assets/medias/icons/logos/cib-html5.svg',
  },
  CSS: {
    type: 'UI - Styling',
    title: 'CSS',
    logo: 'src/assets/medias/icons/logos/cib-css3-shiled.svg',
  },
  SASS: {
    type: 'UI - Styling',
    title: 'SASS',
    logo: 'src/assets/medias/icons/logos/cib-sass-alt.svg',
  },
};
