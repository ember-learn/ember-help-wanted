import githubIssues from '../data/github-issues';
import githubRepositories from '../data/github-repositories';
import pullRequests from '../data/github-pull-requests';

export default function loadDefaultScenario(server) {
  server.db.loadData({
    githubIssues,
    githubRepositories,
    pullRequests,
  });
}
