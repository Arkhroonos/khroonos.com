/**
 * React Imports
 */
import { useParams } from 'react-router-dom';

/**
 * Internal Imports
 */
import { projects } from '../DATAS/projects';
import NavbarComponent from '../navbar/navbar.component';
import styles from './pagesStyles/ProjectPage.module.scss';
import RtpButtonComponent from '../buttons/return-to-projects/rtp-button.component';
import FooterComponent from '../footer/footer.component';
import ThemeSwitcher from '../THEME/theme-switcher';

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h1>Projet non trouvé</h1>;
  }

  return (
    <div className={styles['page']}>
      <section className={styles['app-header']}>
        <NavbarComponent />
      </section>

      <main className={styles['content']}>
        <RtpButtonComponent />
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
            <div className={styles['desccription']}>
              <p>{project.description}</p>
            </div>
            <div className={styles['separator']}></div>
            <div className={styles['story']}>
              <p>{project.story}</p>
            </div>
          </div>
          <div className={styles['top-image']}>
            <img className={styles['cover-image']} src={project.images?.[0]} alt={project.name} />
          </div>
        </div>
        <section className={styles['project-images']}>
          <div className={styles['gallery']}>
            {project.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={project.name}
                style={{ width: '300px', margin: '1rem' }}
              />
            ))}
          </div>
        </section>
        <RtpButtonComponent />
      </main>
      <section>
        <FooterComponent />
      </section>
      <section>
        <ThemeSwitcher />
      </section>
    </div>
  );
}
