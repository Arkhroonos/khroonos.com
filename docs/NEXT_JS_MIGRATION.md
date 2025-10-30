# Nettoyage et Migration du Projet vers Next.js

**Date:** 30 octobre 2025

## Fichiers Supprimés

### Fichiers Vite (obsolètes)
- ✅ `index.html` - Point d'entrée Vite, remplacé par Next.js App Router
- ✅ `vite.config.ts` - Configuration Vite, remplacée par next.config.mjs
- ✅ `src/main.tsx` - Point d'entrée React avec React Router, remplacé par app/page.tsx
- ✅ `tsconfig.app.json` - Configuration TypeScript pour Vite
- ✅ `dist/` - Dossier de build Vite, remplacé par `.next/` et `out/`
- ✅ `build.log` et `error.log` - Logs de build

### Dépendances Supprimées
- ✅ `@nx/vite` - Plugin Nx pour Vite
- ✅ `@vitejs/plugin-react` - Plugin Vite pour React
- ✅ `@vitest/ui` - Interface UI pour Vitest
- ✅ `vite` - Bundler Vite
- ✅ `vitest` - Framework de test Vitest
- ✅ `react-router-dom` - Routing React, remplacé par Next.js routing

## Fichiers Modifiés

### Configuration
- ✅ `package.json` - Nettoyé les dépendances Vite/Vitest, mis à jour les scripts
- ✅ `tsconfig.json` - Configuré pour Next.js avec module bundler
- ✅ `project.json` - Mis à jour pour Next.js, sourceRoot changé de ./src à ./app
- ✅ `.gitignore` - Ajouté .next/, out/, supprimé les références Vite
- ✅ `next.config.mjs` - Configuré pour export statique avec output: 'export'

### Structure Next.js App Router
- ✅ `app/layout.tsx` - Layout racine avec import des styles globaux
- ✅ `app/page.tsx` - Page d'accueil (/)
- ✅ `app/projects/page.tsx` - Page des projets (/projects)
- ✅ `app/about/page.tsx` - Page à propos (/about)
- ✅ `app/project/[id]/page.tsx` - Page projet dynamique (/project/:id)

### Composants Corrigés
- ✅ `src/components/layout/navbar/navbar.tsx` - Remplacé `<a>` par `<Link>` de Next.js
- ✅ `src/components/project/project-card.tsx` - Remplacé `useRouter()` par `<Link>` wrapper
- ✅ `src/components/project/project-card.module.scss` - Ajouté styles pour Link (display: block, text-decoration: none)
- ✅ `src/components/ui/return-button/return-button.tsx` - Utilisé `Link` de Next.js
- ✅ `src/pages/project-page.tsx` - Reçoit `projectId` en prop au lieu d'utiliser `useParams`

### Tests Corrigés
- ✅ `src/pages/home.spec.tsx` - Supprimé BrowserRouter wrapper
- ✅ `src/pages/__tests__/ProjectsPage.test.tsx` - Supprimé BrowserRouter, simplifié renderComponent

## Architecture Finale

```
khroonos.com/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout global + styles
│   ├── page.tsx                 # Page d'accueil
│   ├── about/
│   │   └── page.tsx            # Page /about
│   ├── projects/
│   │   └── page.tsx            # Page /projects
│   └── project/
│       └── [id]/
│           └── page.tsx         # Page /project/:id (dynamique)
├── src/
│   ├── components/              # Composants réutilisables
│   ├── pages/                   # Composants pages (utilisés par app/)
│   ├── data/                    # Données statiques
│   ├── types/                   # Types TypeScript
│   └── styles.scss              # Styles globaux
├── public/                      # Assets statiques
├── next.config.mjs              # Config Next.js (export statique)
├── tsconfig.json                # Config TypeScript pour Next.js
└── package.json                 # Dépendances Next.js

Build Output:
├── .next/                       # Build Next.js (dev/production)
└── out/                         # Export statique (déployé sur Hostinger)
```

## Système de Routing

### Avant (React Router)
```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/project/:id" element={<ProjectPage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
</BrowserRouter>
```

### Après (Next.js App Router)
```
app/
├── page.tsx           → /
├── projects/
│   └── page.tsx       → /projects
├── project/
│   └── [id]/
│       └── page.tsx   → /project/:id
└── about/
    └── page.tsx       → /about
```

## Navigation

### Avant
```tsx
<a href="/projects">Projects</a>
// ou
const router = useRouter();
router.push('/project/123');
```

### Après
```tsx
import Link from 'next/link';

<Link href="/projects">Projects</Link>
```

## Workflow de Déploiement

### Build
```bash
npm run build  # → next build
# Génère : ./out/ (export statique)
```

### Déploiement GitHub Actions → Hostinger
```yaml
- npm run build
- Upload ./out/ vers /public_html/ via FTP
```

## Avantages de Next.js

1. **Performance**
   - SSG (Static Site Generation) pour toutes les pages
   - Optimisation automatique des images
   - Code splitting automatique

2. **SEO**
   - Métadonnées configurables par page
   - Meilleur référencement que SPA

3. **Developer Experience**
   - Routing basé sur le système de fichiers
   - Fast Refresh
   - TypeScript first-class support

4. **Production Ready**
   - Export statique pour Hostinger
   - Optimisations build intégrées
   - Support CSS Modules natif

## Compatibilité

- ✅ React 19.0.0
- ✅ Next.js 15.0.3
- ✅ TypeScript 5.8.2
- ✅ Sass/SCSS modules
- ✅ Nx workspace 21.3.11

## Tests

Les tests utilisent Jest et React Testing Library sans BrowserRouter :
```tsx
import { render } from '@testing-library/react';
import Component from './component';

it('renders', () => {
  const { baseElement } = render(<Component />);
  expect(baseElement).toBeTruthy();
});
```

## Notes

- Le dossier `src/` contient toujours les composants et la logique métier
- Les pages dans `app/` sont des wrappers légers qui utilisent les composants de `src/`
- Cette approche permet de maintenir la séparation des préoccupations tout en utilisant Next.js
- L'export statique (`output: 'export'`) génère un site 100% statique compatible avec Hostinger

