import { useParams } from 'react-router-dom';
import { projects } from '../DATAS/projects';
import NavbarComponent from '../navbar/navbar.component';
import styles from './pagesStyles/projectPagesStyles.module.scss';

//todo: Change Page layout & remove inline styles
export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h1>Projet non trouvé</h1>;
  }

  return (
    <div className={styles['project-page']}>
      <section className={styles['app-header']}>
        <NavbarComponent />
      </section>

      <main className={styles['project-content']} style={{ paddingTop: '6rem', padding: '2rem' }}>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <div className={styles['project-year']}>
          <p>{project.year}</p>
        </div>
        <div>
          {project.images?.map((img, i) => (
            <img key={i} src={img} alt={project.name} style={{ width: '300px', margin: '1rem' }} />
          ))}
        </div>
      </main>
    </div>
  );
}
