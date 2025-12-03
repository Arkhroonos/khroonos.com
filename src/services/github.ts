import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getUserRepos(username: string) {
  const { data } = await octokit.repos.listForUser({
    username,
    sort: 'updated',
    per_page: 10,
  });
  return data;
}

export async function getRepoReadme(owner: string, repo: string) {
  const { data } = await octokit.repos.getReadme({
    owner,
    repo,
  });
  return data;
}

export async function getRepoLanguages(owner: string, repo: string) {
  const { data } = await octokit.repos.listLanguages({
    owner,
    repo,
  });
  return data;
}
