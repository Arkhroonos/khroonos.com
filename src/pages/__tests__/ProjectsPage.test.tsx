/**
 * Projects Page - Tests Examples
 *
 * Ce fichier contient des exemples de tests pour la page Projects
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectsPage from '../projects-page';
import { projects } from '../../data/projects';

// Helper function to render with router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProjectsPage', () => {
  /**
   * Test: La page affiche tous les projets par défaut
   */
  it('should display all projects by default', () => {
    renderWithRouter(<ProjectsPage />);

    // Vérifier que le compteur affiche le bon nombre
    expect(screen.getByText(`${projects.length} projets trouvés`)).toBeTruthy();
  });

  /**
   * Test: Filtrage par année
   */
  it('should filter projects by year', () => {
    renderWithRouter(<ProjectsPage />);

    // Sélectionner l'année 2025
    const yearSelect = screen.getByLabelText('Année');
    fireEvent.change(yearSelect, { target: { value: '2025' } });

    // Vérifier que seuls les projets de 2025 sont affichés
    const projectsFrom2025 = projects.filter((p) => p.year === '2025');
    expect(screen.getByText(`${projectsFrom2025.length} projets trouvés`)).toBeTruthy();
  });

  /**
   * Test: Filtrage par technologie
   */
  it('should filter projects by technology', () => {
    renderWithRouter(<ProjectsPage />);

    // Sélectionner Figma
    const techSelect = screen.getByLabelText('Technologie');
    fireEvent.change(techSelect, { target: { value: 'Figma' } });

    // Vérifier que les projets Figma sont affichés
    const figmaProjects = projects.filter((p) => p.softwares?.some((s) => s.title === 'Figma'));
    expect(screen.getByText(`${figmaProjects.length} projets trouvés`)).toBeTruthy();
  });

  /**
   * Test: Combinaison de filtres
   */
  it('should filter projects by year AND technology', () => {
    renderWithRouter(<ProjectsPage />);
    // ...existing code...
  });

  /**
   * Test: Réinitialisation des filtres
   */
  it('should reset filters when clicking reset button', () => {
    renderWithRouter(<ProjectsPage />);
    // ...existing code...
  });

  /**
   * Test: Suppression d'un filtre via chip
   */
  it('should remove filter when clicking chip close button', () => {
    renderWithRouter(<ProjectsPage />);
    // ...existing code...
  });

  /**
   * Test: Message "Aucun projet trouvé"
   */
  it('should display "no projects found" message when filters match nothing', () => {
    renderWithRouter(<ProjectsPage />);
    // ...existing code...
  });

  /**
   * Test: Navigation vers un projet
   */
  it('should render project cards', () => {
    renderWithRouter(<ProjectsPage />);

    // Vérifier qu'au moins un projet est affiché
    const firstProject = projects[0];
    expect(screen.getByText(firstProject.name)).toBeTruthy();
  });
});

/**
 * Tests du composant ProjectCard
 * TODO: Déplacer ces tests dans src/components/project/project-card.spec.tsx
 */
/*
describe('ProjectCard', () => {
  // ...existing code...
});
*/

/**
 * Tests du composant ProjectFilters
 * TODO: Déplacer ces tests dans src/components/project/project-filters.spec.tsx
 */
/*
describe('ProjectFilters', () => {
  // ...existing code...
});
*/
