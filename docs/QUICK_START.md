# 🚀 Guide de Démarrage Rapide

## Installation

```bash
npm install
```

## Développement

Lancer le serveur de développement :

```bash
npm run start
```

L'application sera accessible sur `http://localhost:4200`

## Structure du Projet

```
src/
├── components/           # Composants réutilisables
│   ├── layout/          # Navigation, Footer, ThemeSwitcher
│   ├── sections/        # Sections de la page d'accueil
│   ├── ui/             # Boutons, composants UI
│   └── project/        # Composants liés aux projets
├── pages/              # Pages de l'application
├── data/               # Données et configurations
└── assets/             # Images, fonts, icônes
```

## Utilisation des Composants

### Imports Groupés

Au lieu d'importer chaque composant individuellement :

```typescript
// ❌ Ancien style
import Navbar from '../components/layout/navbar/navbar';
import Footer from '../components/layout/footer/footer';
import ThemeSwitcher from '../components/layout/theme-switcher/theme-switcher';
```

Utilisez les imports groupés :

```typescript
// ✅ Nouveau style
import { Navbar, Footer, ThemeSwitcher } from '../components/layout';
```

### Catégories Disponibles

#### Layout
```typescript
import { Navbar, Footer, ThemeSwitcher } from '../components/layout';
```

#### Sections
```typescript
import { 
  Hero, 
  Stack, 
  About, 
  ProjectsSection, 
  Skills, 
  Experience 
} from '../components/sections';
```

#### UI
```typescript
import { ReturnButton } from '../components/ui';
```

#### Project
```typescript
import { ProjectCard, ProjectFilters } from '../components/project';
```

## Ajouter un Nouveau Composant

### 1. Créer le dossier du composant

```bash
mkdir src/components/[catégorie]/[nom-composant]
```

### 2. Créer les fichiers

```bash
touch src/components/[catégorie]/[nom-composant]/[nom-composant].tsx
touch src/components/[catégorie]/[nom-composant]/[nom-composant].module.scss
touch src/components/[catégorie]/[nom-composant]/[nom-composant].spec.tsx
```

### 3. Structure du composant

```typescript
// nom-composant.tsx
import styles from './nom-composant.module.scss';

export function NomComposant() {
  return (
    <div className={styles['container']}>
      {/* Votre contenu */}
    </div>
  );
}

export default NomComposant;
```

### 4. Ajouter à l'export centralisé

```typescript
// src/components/[catégorie]/index.ts
export { default as NomComposant } from './nom-composant/nom-composant';
```

## Routes Disponibles

- `/` - Page d'accueil
- `/about` - Page À propos
- `/projects` - Liste des projets
- `/project/:id` - Détail d'un projet

## Scripts Disponibles

```bash
# Développement
npm run start

# Build production
npm run build

# Tests
npm run test

# Lint
npm run lint

# Visualiser le graphe de dépendances
npx nx graph
```

## Conventions de Nommage

### Fichiers
- Composants : `nom-composant.tsx`
- Styles : `nom-composant.module.scss`
- Tests : `nom-composant.spec.tsx`

### Composants
- PascalCase : `NomComposant`
- Export par défaut + export nommé

### Dossiers
- kebab-case : `nom-dossier/`

## Gestion des Styles

Les styles utilisent CSS Modules avec SCSS :

```typescript
import styles from './composant.module.scss';

<div className={styles['mon-classe']}>
```

### Variables CSS Globales

Variables disponibles :
- `--emphasis` : Couleur d'accentuation
- `--background-color` : Couleur de fond
- `--text-color` : Couleur du texte
- `--border-color` : Couleur des bordures
- `--liquid-glass-color` : Effet glassmorphism

## Données

Les données sont centralisées dans `src/data/` :

```typescript
import { projects } from '../data/projects';
import { experiences } from '../data/experiences';
import { informations } from '../data/informations';
```

## TypeScript

Le projet utilise TypeScript strict. Définissez toujours vos types :

```typescript
interface ComponentProps {
  title: string;
  items: string[];
}

export function Component({ title, items }: ComponentProps) {
  // ...
}
```

## Debugging

### Vérifier les erreurs

```bash
npx nx lint khroonos.com
```

### Build de production

```bash
npm run build
```

### Analyser le bundle

```bash
npx vite build --mode analyze
```

## Ressources

- [Documentation Nx](https://nx.dev)
- [Documentation React](https://react.dev)
- [Documentation TypeScript](https://www.typescriptlang.org)
- [Documentation Vite](https://vitejs.dev)

## Support

Pour toute question ou problème, consultez la documentation dans `docs/` ou créez une issue.

