/**
 * React Imports
 */
import { useParams } from 'react-router-dom';

/**
 * Internal Imports
 */
import { projects } from '../data/projects';
import { Navbar, Footer, ThemeSwitcher } from '../components/layout';
import { Gallery } from '../components/sections';
import { ReturnButton } from '../components/ui';
import styles from './styles/ProjectPage.module.scss';

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h1>Projet non trouvé</h1>;
  }

  return (
    <div className={styles['page']}>
      <section className={styles['app-header']}>
        <Navbar />
      </section>

      <main className={styles['content']}>
        <div className={styles['top-image']}>
          <img className={styles['cover-image']} src={project.images?.[0]} alt={project.name} />
        </div>
        <ReturnButton />
        <div className={styles['layout']}>
          <div className={styles['infos']}>
            <div className={styles['details']}>
              <h1 className={styles['name']}>{project.name}</h1>
              <div className={styles['project-year']}>
                <p>{project.year}</p>
              </div>
            </div>

            <div className={styles['project-type']}>
              {project.type?.map((type, i) => (
                <p key={i} className={styles['type']}>
                  {type}
                </p>
              ))}
            </div>
            <div className={styles['separator']}></div>
            <div className={styles['technologies']}>
              {project.softwares?.map((software, i) => (
                <p key={i} className={styles['software']}></p>
              ))}
            </div>

            <div className={styles['description']}>
              <p>{project.description}</p>
            </div>
          </div>
          <div className={styles['story']}>
            <p>{project.story}</p>
          </div>
          <div className={styles['project-images']}>
            <Gallery images={project.images || []} projectName={project.name} />
          </div>
        </div>

        <ReturnButton />
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
//todo: change page layout & remove inline styles + change cover image selection + Create a new gallery component.
