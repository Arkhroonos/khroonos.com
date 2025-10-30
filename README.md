# KhroonosCom

Portfolio personnel moderne développé avec React, TypeScript et Nx.

## 🏗️ Architecture du Projet

Le projet suit une architecture modulaire et organisée :

```
src/
├── components/          # Composants réutilisables
│   ├── layout/         # Composants de mise en page (Navbar, Footer, ThemeSwitcher)
│   ├── sections/       # Sections de la page d'accueil (Hero, Stack, About, etc.)
│   ├── ui/             # Composants UI génériques (Buttons, etc.)
│   └── project/        # Composants spécifiques aux projets
├── pages/              # Pages de l'application
│   ├── home.tsx        # Page d'accueil
│   ├── about-page.tsx  # Page À propos
│   ├── project-page.tsx # Page détail d'un projet
│   └── projects-page.tsx # Page liste des projets
├── data/               # Données et constantes
└── assets/             # Médias et ressources statiques
```

Pour plus de détails sur l'architecture, consultez [docs/ARCHITECTURE_REFACTORING.md](docs/ARCHITECTURE_REFACTORING.md).

## 🚀 Démarrage Rapide

### Installation
```sh
npm install
```

### Développement
Pour lancer le serveur de développement :

```sh
npm run start
# ou
npx nx serve khroonos.com
```

### Production
Pour créer un build de production :

```sh
npm run build
# ou
npx nx build khroonos.com
```

### Tests
Pour exécuter les tests :

```sh
npm run test
# ou
npx nx test khroonos.com
```

## 📦 Composants

### Layout
- **Navbar** - Navigation principale
- **Footer** - Pied de page
- **ThemeSwitcher** - Sélecteur de thème

### Sections
- **Hero** - Section d'introduction
- **Stack** - Technologies utilisées
- **About** - Section à propos
- **ProjectsSection** - Projets en vedette
- **Skills** - Compétences
- **Experience** - Expériences professionnelles
- **Marquee** - Bandeau défilant

### Imports Optimisés
Les composants peuvent être importés de manière groupée :

```typescript
import { Navbar, Footer, ThemeSwitcher } from '../components/layout';
import { Hero, Stack, About } from '../components/sections';
import { ReturnButton } from '../components/ui';
import { ProjectCard, ProjectFilters } from '../components/project';
```

## 🛠️ Technologies

- **React 19** - Bibliothèque UI
- **TypeScript** - Langage typé
- **Vite** - Build tool
- **Nx** - Monorepo tooling
- **SCSS** - Styles
- **React Router** - Routing

## 📚 Documentation

- [Architecture Refactoring](docs/ARCHITECTURE_REFACTORING.md) - Détails de la réorganisation
- [Errors Fixed](docs/ERRORS_FIXED.md) - Historique des corrections
- [Projects Page Implementation](docs/PROJECTS_PAGE_IMPLEMENTATION.md) - Implémentation de la page projets

## 🔧 Nx Commands

To see all available targets to run for a project, run:

```sh
npx nx show project khroonos.com
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-standalone-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
