/**
 * React Imports
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/**
 * Internal Imports
 */
import App from './app/app';
import './styles.scss';

/**
 * Routes Imports
 */
import ProjectPage from './app/pages/ProjectPage';
import AboutPage from './app/pages/AboutPage';
import ProjectsPage from './app/pages/ProjectsPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
