import githubIssues from '../data/github-issues';
import githubRepositories from '../data/github-repositories';

export default function loadDefaultScenario(server) {
  server.db.loadData({
    githubIssues,
    githubRepositories,
  });
}
