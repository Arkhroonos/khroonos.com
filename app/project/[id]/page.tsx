import ProjectPage from '../../../src/views/project-page';
import { projects } from '../../../src/data/projects';

// Generate static params for all projects (Server Component)
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Server Component that passes the id as prop
export default function Project({ params }: { params: { id: string } }) {
  return <ProjectPage projectId={params.id} />;
}
