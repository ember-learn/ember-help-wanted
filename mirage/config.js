const API_URL = 'https://api.github.com/repos/';

export default function () {
  this.get('/github-issues', (schema, request) => {
    const groupName = request.queryParams.group;

    if (!groupName) {
      return [];
    }

    const githubIssues = schema.githubIssues.all().models;

    return githubIssues.filter((githubIssue) => {
      const repositoryUrl = githubIssue.repository_url ?? '';
      const fullName = repositoryUrl.replace(API_URL, '');

      if (groupName === 'RFCs') {
        return fullName.startsWith('emberjs/rfcs');
      }

      return fullName.startsWith(groupName);
    });
  });

  this.get('/github-repositories');

  this.get('/api/pull-requests');
}
