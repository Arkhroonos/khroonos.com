/**
 * TypeScript Interface for Software
 */
export interface Software {
  type?: string;
  title?: string;
  logo?: string;
}

export const softwaresLibrary: Record<string, Software> = {
  Figma: {
    type: 'Design',
    title: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  },
  Illustrator: {
    type: 'Design',
    title: 'Adobe Illustrator',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg',
  },
  Photoshop: {
    type: 'Design',
    title: 'Adobe Photoshop',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg',
  },
  WebStorm: {
    type: 'Development',
    title: 'WebStorm',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webstorm/webstorm-plain.svg',
  },
  VSCode: {
    type: 'Development',
    title: 'Visual Studio Code',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-plain-wordmark.svg',
  },
  Slack: {
    type: 'Management',
    title: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-plain.svg',
  },
  Trello: {
    type: 'Management',
    title: 'Trello',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg',
  },
  Notion: {
    type: 'Management',
    title: 'Notion',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-plain.svg',
  },

  Webflow: {
    type: 'Web Design',
    title: 'Webflow',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg', //TODO: Chercher Logo
  },
  Javascript: {
    type: 'Programming Languages',
    title: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg',
  },
  TypeScript: {
    type: 'Programming Languages',
    title: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
  },

  Python: {
    type: 'Programming Languages',
    title: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  React: {
    type: 'Front-end libraries & frameworks',
    title: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  Angular: {
    type: 'Front-end libraries & frameworks',
    title: 'Angular',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain.svg',
  },

  VueJS: {
    type: 'Front-end libraries & frameworks',
    title: 'Vue.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg',
  },

  NodeJS: {
    type: 'Back-end libraries & frameworks',
    title: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg',
  },
  Nestjs: {
    type: 'Back-end libraries & frameworks',
    title: 'Nest.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
  },
  Nextjs: {
    type: 'Back-end libraries & frameworks',
    title: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  },
  HTML: {
    type: 'UI - Styling',
    title: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  CSS: {
    type: 'UI - Styling',
    title: 'CSS',
    logo: '/medias/icons/logos/cib-css3-shiled.svg',
  },
  SASS: {
    type: 'UI - Styling',
    title: 'SASS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
  },
};
