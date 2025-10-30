# Projects Page - Documentation

## Vue d'ensemble

La page Projects affiche tous les projets sous forme de cartes avec des filtres interactifs permettant de rechercher par technologie et par année.

## Structure des fichiers

```
src/app/pages/
├── ProjectsPage.tsx                          # Page principale
├── components/
│   ├── ProjectCard.tsx                       # Composant de carte de projet
│   ├── ProjectCard.module.scss               # Styles de la carte
│   ├── ProjectFilters.tsx                    # Composant de filtres
│   └── ProjectFilters.module.scss            # Styles des filtres
└── pagesStyles/
    └── ProjectsPage.module.scss              # Styles de la page
```

## Fonctionnalités

### 1. Affichage des Projets en Grille

- **Grille responsive** : s'adapte automatiquement selon la taille d'écran
  - Desktop : 3-4 colonnes
  - Tablette : 2 colonnes
  - Mobile : 1 colonne
- **Cartes de projet** avec :
  - Image du projet (ou placeholder si pas d'image)
  - Nom et année du projet
  - Description courte
  - Tags de type (Branding, Design, Web Design, etc.)
  - Icônes des technologies utilisées (max 4 visibles)
  - Bouton "Voir le projet"

### 2. Filtres Interactifs

#### Filtre par Année
- Menu déroulant avec toutes les années disponibles
- Tri des années par ordre décroissant

#### Filtre par Technologie
- Menu déroulant avec toutes les technologies utilisées dans les projets
- Liste triée alphabétiquement

#### Fonctionnalités des filtres
- **Combinaison** : possibilité de filtrer par année ET technologie simultanément
- **Indicateurs visuels** : chips affichant les filtres actifs
- **Réinitialisation rapide** : 
  - Bouton global "Réinitialiser"
  - Bouton × sur chaque chip de filtre actif
- **Compteur** : affiche le nombre de projets correspondants

### 3. Interactions

#### Carte de Projet
```typescript
// Au clic sur une carte
window.location.href = `/project/${project.id}`;
```

#### Hover Effects
- **Carte** : élévation avec shadow
- **Image** : zoom léger (scale 1.05)
- **Overlay** : apparition progressive des informations
- **Boutons** : changement de couleur et légère translation

## Responsive Design

### Breakpoints

```scss
// Smartphones portrait (iPhone SE, 12 Mini, 13, 14, 15)
@media (max-width: 480px) { ... }

// Tablets portrait (iPad Mini, iPad)
@media (min-width: 481px) and (max-width: 768px) { ... }

// Tablets landscape (iPad Pro)
@media (min-width: 769px) and (max-width: 1024px) { ... }

// Large Desktop
@media (min-width: 1441px) { ... }
```

### Adaptations Mobile

- **Filtres** : passent en colonne sur mobile
- **Grille** : 1 seule colonne
- **Overlay** : toujours visible (pas seulement au hover)
- **Tailles de texte** : réduites pour optimiser l'espace
- **Boutons** : largeur complète sur mobile

## Utilisation

### Dans ProjectsPage.tsx

```typescript
import ProjectCard from './components/ProjectCard';
import ProjectFilters from './components/ProjectFilters';

// Filtrage des projets
const filteredProjects = useMemo(() => {
  return projects.filter((project) => {
    // Filtre par année
    if (selectedYear && project.year !== selectedYear) {
      return false;
    }
    // Filtre par technologie
    if (selectedTechnology) {
      const hasTechnology = project.softwares?.some(
        (software) => software.title === selectedTechnology
      );
      if (!hasTechnology) return false;
    }
    return true;
  });
}, [selectedYear, selectedTechnology]);
```

### Composant ProjectCard

```typescript
<ProjectCard project={project} />
```

### Composant ProjectFilters

```typescript
<ProjectFilters
  selectedYear={selectedYear}
  selectedTechnology={selectedTechnology}
  years={years}
  technologies={technologies}
  onYearChange={setSelectedYear}
  onTechnologyChange={setSelectedTechnology}
  onReset={handleResetFilters}
/>
```

## Styles

### Variables CSS Utilisées

```scss
--liquid-glass-color      // Fond des composants avec effet de verre
--border-color            // Couleur des bordures
--border-size            // Épaisseur des bordures
--rounded-corners        // Rayon des coins arrondis
--shadow-color           // Ombres portées
--emphasis               // Couleur d'accent (orange)
--text-color             // Couleur du texte
--chips-color            // Fond des badges/chips
```

### Effets Visuels

- **Liquid Glass Effect** : `backdrop-filter: blur(10px)`
- **Transitions** : `transition: all 0.3s ease`
- **Hover Transform** : `transform: translateY(-8px)`
- **Active State** : `transform: scale(0.95)`

## Messages d'Erreur

### Aucun Projet Trouvé

```tsx
<div className={styles['no-projects']}>
  <p>Aucun projet ne correspond à vos critères de recherche.</p>
  <button onClick={handleResetFilters}>
    Réinitialiser les filtres
  </button>
</div>
```

## Performance

### Optimisations

- **useMemo** pour les calculs de filtrage
- **useMemo** pour l'extraction des années et technologies
- **Lazy loading** des images (natif du navigateur)
- **CSS Grid** pour un layout performant

## Accessibilité

- Labels pour tous les champs de formulaire
- `aria-label` sur les boutons de fermeture
- Contraste de couleurs respecté
- Navigation au clavier possible
- Focus visible sur les éléments interactifs

## Prochaines Améliorations Possibles

1. **Animation** : transitions lors de l'ajout/suppression de filtres
2. **Tri** : ajouter des options de tri (date, nom, type)
3. **Recherche textuelle** : barre de recherche par nom/description
4. **Pagination** : si le nombre de projets devient important
5. **Vue liste/grille** : toggle entre deux modes d'affichage
6. **Sauvegarde des filtres** : dans localStorage ou URL params

