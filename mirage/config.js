export default function() {
  this.get('/github-issues', 'githubIssues');
  this.get('/github-repositories', 'githubRepositories');
}
