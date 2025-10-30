/**
 * React Imports
 */
import { useState, useMemo } from 'react';

/**
 * Internal Imports
 */
import styles from './styles/ProjectsPage.module.scss';
import { Navbar, Footer, ThemeSwitcher } from '../components/layout';
import { ProjectCard, ProjectFilters } from '../components/project';
import { projects } from '../data/projects';
import { Software } from '../data/softwares';

export default function ProjectsPage() {
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedTechnology, setSelectedTechnology] = useState<string>('');

  /**
   * Extract unique years from projects
   */
  const years = useMemo(() => {
    const yearsSet = new Set<string>();
    projects.forEach((project) => {
      if (project.year) {
        yearsSet.add(project.year);
      }
    });
    return Array.from(yearsSet).sort((a, b) => parseInt(b) - parseInt(a));
  }, []);

  /**
   * Extract unique technologies from all projects
   */
  const technologies = useMemo(() => {
    const techMap = new Map<string, Software>();
    projects.forEach((project) => {
      project.softwares?.forEach((software) => {
        if (software.title && !techMap.has(software.title)) {
          techMap.set(software.title, software);
        }
      });
    });
    return Array.from(techMap.values()).sort((a, b) =>
      (a.title || '').localeCompare(b.title || '')
    );
  }, []);

  /**
   * Filter projects based on selected filters
   */
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Filter by year
      if (selectedYear && project.year !== selectedYear) {
        return false;
      }

      // Filter by technology
      if (selectedTechnology) {
        const hasTechnology = project.softwares?.some(
          (software) => software.title === selectedTechnology
        );
        if (!hasTechnology) {
          return false;
        }
      }

      return true;
    });
  }, [selectedYear, selectedTechnology]);

  /**
   * Reset all filters
   */
  const handleResetFilters = () => {
    setSelectedYear('');
    setSelectedTechnology('');
  };

  return (
    <div className={styles['page']}>
      <section className={styles['app-header']}>
        <Navbar />
      </section>

      <main className={styles['content']}>
        <div className={styles['content-header']}>
          <h1 className={styles['title-bar-text']}>Tous les Projets</h1>
          <p className={styles['subtitle']}>
            Découvrez l'ensemble de mes réalisations en design, développement web et branding.
          </p>
        </div>

        {/* Filters Section */}
        <ProjectFilters
          selectedYear={selectedYear}
          selectedTechnology={selectedTechnology}
          years={years}
          technologies={technologies}
          onYearChange={setSelectedYear}
          onTechnologyChange={setSelectedTechnology}
          onReset={handleResetFilters}
        />

        {/* Projects Count */}
        <div className={styles['projects-count']}>
          <span>
            {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé
            {filteredProjects.length > 1 ? 's' : ''}
          </span>
        </div>

        {/* Projects Grid */}
        <div className={styles['projects-grid']}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
          ) : (
            <div className={styles['no-projects']}>
              <p>Aucun projet ne correspond à vos critères de recherche.</p>
              <button className={styles['reset-filters-button']} onClick={handleResetFilters}>
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </main>

      <section>
        <Footer />
      </section>

      <section>
        <ThemeSwitcher />
      </section>
    </div>
  );
}
