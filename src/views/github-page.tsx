'use client';

import { useEffect, useMemo, useState } from 'react';
import { FaCodeFork, FaGithub, FaStar } from 'react-icons/fa6';

import { Navbar, Footer, ThemeSwitcher } from '../components/layout';
import { informations } from '../data/informations';
import styles from './styles/GithubPage.module.scss';

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const githubProfileUrl = informations.github ?? 'https://github.com/Arkhroonos';

function getGithubUsername(profileUrl: string) {
  return new URL(profileUrl).pathname.replace(/^\//, '').split('/')[0] || 'Arkhroonos';
}

export default function GithubPage() {
  const username = useMemo(() => getGithubUsername(githubProfileUrl), []);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadRepos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=12&direction=desc`,
          {
            signal: controller.signal,
            headers: {
              Accept: 'application/vnd.github+json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API returned ${response.status}`);
        }

        const data: GitHubRepo[] = await response.json();
        setRepos(
          data
            .filter((repo) => !repo.name.endsWith('.github'))
            .sort((a, b) => {
              return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
            })
        );
      } catch (cause) {
        if (cause instanceof DOMException && cause.name === 'AbortError') {
          return;
        }

        setError(cause instanceof Error ? cause.message : 'Impossible de charger les repos GitHub.');
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    void loadRepos();

    return () => {
      controller.abort();
    };
  }, [username]);

  return (
    <div className={styles.page}>
      <section className={styles['app-header']}>
        <Navbar />
      </section>

      <main className={styles.content}>
        <div className={styles['content-header']}>
          <h1 className={styles['title-bar-text']}>GitHub</h1>
          <p className={styles.subtitle}>
            Mes dépôts publics les plus récents, récupérés directement depuis GitHub.
          </p>
          <a
            href={githubProfileUrl}
            className={styles['profile-link']}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub />
            Voir le profil
          </a>
        </div>

        {error ? (
          <div className={styles['message-card']}>
            <p>Impossible de charger les dépôts pour le moment.</p>
            <span>{error}</span>
          </div>
        ) : null}

        {isLoading ? (
          <div className={styles['message-card']}>
            <p>Chargement des dépôts GitHub…</p>
          </div>
        ) : null}

        {!isLoading && !error ? (
          <div className={styles['repos-grid']}>
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                className={styles['repo-card']}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className={styles['repo-card-header']}>
                  <h2>{repo.name}</h2>
                  <span className={styles.language}>{repo.language ?? 'Code'}</span>
                </div>

                <p>{repo.description ?? 'Aucune description disponible.'}</p>

                <div className={styles['repo-card-footer']}>
                  <span>
                    <FaStar />
                    {repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeFork />
                    {repo.forks_count}
                  </span>
                  <span>{new Date(repo.updated_at).toLocaleDateString('fr-FR')}</span>
                </div>
              </a>
            ))}
          </div>
        ) : null}
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
