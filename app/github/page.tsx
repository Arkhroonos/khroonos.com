'use client';

import { Suspense } from 'react';
import GithubPage from '../../src/views/github-page';

export const dynamic = 'force-dynamic';

export default function GitHub() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <GithubPage />
    </Suspense>
  );
}