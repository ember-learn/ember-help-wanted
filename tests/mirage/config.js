import { createServer, Model } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    models: {
      githubIssue: Model,
      githubRepository: Model,
      pullRequest: Model,
      ...config.models
    },
    routes() {
      this.namespace = '';
      const API_URL = 'https://api.github.com/repos/';

      this.get('/github-issues', (schema, request) => {
        const groupName = request.queryParams.group;

        if (!groupName) {
          return [];
        }

        const githubIssues = schema.db.githubIssues;

        return githubIssues.filter(githubIssue => {
          const repositoryUrl = githubIssue.repository_url ?? '';
          const fullName = repositoryUrl.replace(API_URL, '');

          if (groupName === 'RFCs') {
            return fullName.startsWith('emberjs/rfcs');
          }

          return fullName.startsWith(groupName);
        });
      });

      this.get('/github-repositories', (schema) => {
        return schema.db.githubRepositories;
      });

      this.get('/api/pull-requests', (schema) => {
        return schema.db.pullRequests;
      });
    }
  };

  return createServer(finalConfig);
}
