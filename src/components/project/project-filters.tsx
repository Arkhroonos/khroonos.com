/**
 * React Imports
 */
import React from 'react';

/**
 * Internal Imports
 */
import styles from './project-filters.module.scss';
import { Software } from '../../data/softwares';

interface ProjectFiltersProps {
  selectedYear: string;
  selectedTechnology: string;
  years: string[];
  technologies: Software[];
  onYearChange: (year: string) => void;
  onTechnologyChange: (tech: string) => void;
  onReset: () => void;
}

export function ProjectFilters({
  selectedYear,
  selectedTechnology,
  years,
  technologies,
  onYearChange,
  onTechnologyChange,
  onReset,
}: ProjectFiltersProps) {
  return (
    <div className={styles['filters-container']}>
      <div className={styles['filters-wrapper']}>
        {/* Filtre par année */}
        <div className={styles['filter-group']}>
          <label htmlFor="year-filter" className={styles['filter-label']}>
            Année
          </label>
          <select
            id="year-filter"
            className={styles['filter-select']}
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
          >
            <option value="">Toutes les années</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Filtre par technologie */}
        <div className={styles['filter-group']}>
          <label htmlFor="tech-filter" className={styles['filter-label']}>
            Technologie
          </label>
          <select
            id="tech-filter"
            className={styles['filter-select']}
            value={selectedTechnology}
            onChange={(e) => onTechnologyChange(e.target.value)}
          >
            <option value="">Toutes les technologies</option>
            {technologies.map((tech, index) => (
              <option key={index} value={tech.title}>
                {tech.title}
              </option>
            ))}
          </select>
        </div>

        {/* Bouton de réinitialisation */}
        {(selectedYear || selectedTechnology) && (
          <button className={styles['reset-button']} onClick={onReset}>
            Réinitialiser
          </button>
        )}
      </div>

      {/* Indicateurs de filtres actifs */}
      {(selectedYear || selectedTechnology) && (
        <div className={styles['active-filters']}>
          <span className={styles['active-label']}>Filtres actifs:</span>
          {selectedYear && (
            <span className={styles['filter-chip']}>
              {selectedYear}
              <button
                className={styles['chip-close']}
                onClick={() => onYearChange('')}
                aria-label="Retirer le filtre année"
              >
                ×
              </button>
            </span>
          )}
          {selectedTechnology && (
            <span className={styles['filter-chip']}>
              {selectedTechnology}
              <button
                className={styles['chip-close']}
                onClick={() => onTechnologyChange('')}
                aria-label="Retirer le filtre technologie"
              >
                ×
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectFilters;
