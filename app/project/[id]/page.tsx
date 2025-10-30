'use client';

import { useParams } from 'next/navigation';
import ProjectPage from '../../../src/pages/project-page';

export default function Project() {
  const params = useParams();
  const id = params?.id as string;

  return <ProjectPage projectId={id} />;
}
